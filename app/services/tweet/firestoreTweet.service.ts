/* eslint-disable prettier/prettier */
import { Tweet, User } from '@luudvan94/hey-memory-shared-models';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import { log } from 'app/hooks/useLogger';
import { getDateLimits } from 'app/utils/helpers';

import {
  TweetContent,
  TweetFilter,
  TweetPhotoUrls,
  TweetService,
  TweetsHandler
} from './tweet.service';
import { Constants } from '../firestore.utils';

export class FirebaseTweetService implements TweetService {
  protected user: User;

  constructor(user: User | undefined) {
    if (!user) {
      throw new Error('User is undefined');
    }
    this.user = user;
  }

  postTweet = async (content: TweetContent) => {
    const creationTime = new Date();
    const doc = await firestore()
      .collection(Constants.USERS)
      .doc(this.user.uid)
      .collection(Constants.TWEETS)
      .add({
        ...content,
        createdAt: creationTime
      });

    log.debug('Start adding tweet to unanalyzed', doc.id);
    firestore()
      .collection(Constants.UN_REALIZED)
      .doc(doc.id)
      .set({
        ...content,
        createdAt: creationTime,
        userId: this.user.uid
      });

    if (content.photoUrl) {
      log.debug('Start uploading photo', content.photoUrl);
      const storageRef = storage().ref();
      const photoRef = storageRef.child(
        `image/${this.user.uid}/${doc.id}/${new Date().getTime()}.jpg`
      );

      photoRef.putFile(content.photoUrl).then((snapshot) => {
        log.debug('Uploaded a blob or file!', snapshot);
      });
    }

    if (content.parentTweetId) {
      log.debug('Start updating parentTweetId');
      firestore()
        .collection(Constants.USERS)
        .doc(this.user.uid)
        .collection(Constants.TWEETS)
        .doc(content.parentTweetId)
        .update({
          childCount: firestore.FieldValue.increment(1)
        });
    }
  };

  getPhotoUrls = async (tweetId: string): Promise<TweetPhotoUrls> => {
    const photosPath = `image/${this.user.uid}/${tweetId}`;
    const listResult = await storage().ref(photosPath).listAll();

    const urlPromises = listResult.items.map((itemRef) =>
      itemRef.getDownloadURL()
    );
    const urls = await Promise.all(urlPromises);

    const photoUrls: TweetPhotoUrls = {};
    urls.forEach((url) => {
      if (url.includes('thumb_')) {
        photoUrls.thumbnail = url;
        log.debug('thumbnail', url);
      } else {
        photoUrls.photoUrl = url;
        log.debug('photoUrl', url);
      }
    });

    return photoUrls;
  };

  onTweetChanges = (
    filter: TweetFilter,
    callback: TweetsHandler
  ): (() => void) => {
    let query = firestore()
      .collection(Constants.USERS)
      .doc(this.user.uid)
      .collection(Constants.TWEETS)
      .orderBy('createdAt', filter.sorting ? filter.sorting : 'desc');

    if (filter.selectedDate) {
      const [startDate, endDate] = getDateLimits(filter.selectedDate);

      query = query
        .where('createdAt', '>=', startDate)
        .where('createdAt', '<=', endDate);
    }

    if (filter.parentTweetId) {
      query = query.where('parentTweetId', '==', filter.parentTweetId);
    } else {
      query = query.where('parentTweetId', '==', null);
    }

    const subscriber = query.onSnapshot((snapshot) => {
      log.debug('onTweetChanges');
      const tweets: Tweet[] = [];
      snapshot.forEach((doc) => {
        tweets.push({
          id: doc.id,
          content: doc.data()['content'],
          createdAt: doc.data()['createdAt'].toDate(),
          parentTweetId: doc.data()['parentTweetId'],
          childCount: doc.data()['childCount'] || 0,
          photoUrl: doc.data()['photoUrl'] || null,
          thumbnail: doc.data()['thumbnail'] || null
        });
      });
      callback(tweets);
    });

    return subscriber;
  };

  deleteTweet = async (tweetId: string): Promise<void> => {
    await firestore()
      .collection(Constants.USERS)
      .doc(this.user.uid)
      .collection(Constants.TWEETS)
      .doc(tweetId)
      .delete();
  };
}

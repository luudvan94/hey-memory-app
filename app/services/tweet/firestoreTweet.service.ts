import { Tweet, User } from '@luudvan94/hey-memory-shared-models';
import firestore from '@react-native-firebase/firestore';

import { log } from 'app/hooks/useLogger';
import { getDateLimits } from 'app/utils/helpers';

import {
  TweetContent,
  TweetFilter,
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
    firestore()
      .collection(Constants.USERS)
      .doc(this.user.uid)
      .collection(Constants.TWEETS)
      .add({
        ...content,
        createdAt: new Date()
      });

    if (content.parentTweetId) {
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
      log.debug('onTweetChanges', snapshot.size);
      const tweets: Tweet[] = [];
      snapshot.forEach((doc) => {
        tweets.push({
          id: doc.id,
          content: doc.data()['content'],
          createdAt: doc.data()['createdAt'].toDate(),
          parentTweetId: doc.data()['parentTweetId'],
          childCount: doc.data()['childCount'] || 0
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

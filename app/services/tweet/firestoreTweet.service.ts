import { Content, Tweet, User } from '@luudvan94/hey-memory-shared-models';
import firestore from '@react-native-firebase/firestore';

import { getDateLimits } from 'app/utils/helpers';

import { TweetFilter, TweetService } from './tweet.service';
import { Constants } from '../firestore.utils';

export class FirebaseTweetService implements TweetService {
  protected user: User;

  constructor(user: User | undefined) {
    if (!user) {
      throw new Error('User is undefined');
    }
    this.user = user;
  }

  postTweet = async (content: Content) => {
    firestore()
      .collection(Constants.USERS)
      .doc(this.user.uid)
      .collection(Constants.TWEETS)
      .add({
        content,
        createdAt: new Date()
      });
  };

  getTweets = async (filter: TweetFilter): Promise<Tweet[]> => {
    let query = await firestore()
      .collection(Constants.USERS)
      .doc(this.user.uid)
      .collection(Constants.TWEETS)
      .orderBy('createdAt', 'desc');

    if (filter.selectedDate) {
      const [startDate, endDate] = getDateLimits(filter.selectedDate);

      query = query
        .where('createdAt', '>=', startDate)
        .where('createdAt', '<=', endDate);
    }

    const querySnapshot = await query.get();
    const tweets: Tweet[] = [];
    querySnapshot.forEach((doc) => {
      tweets.push({
        id: doc.id,
        content: doc.data()['content'],
        createdAt: doc.data()['createdAt'].toDate()
      });
    });
    return tweets;
  };
}

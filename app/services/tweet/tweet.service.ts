import { Content, Tweet } from '@luudvan94/hey-memory-shared-models';

export type TweetFilter = {
  selectedDate?: Date;
};

export interface TweetService {
  postTweet(content: Content): Promise<void>;
  getTweets(filter: TweetFilter): Promise<Tweet[]>;
}

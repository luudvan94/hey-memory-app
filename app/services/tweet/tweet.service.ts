import { Content, Tweet } from '@luudvan94/hey-memory-shared-models';

export type TweetsHandler = (tweets: Tweet[]) => void;
export type TweetFilter = {
  selectedDate?: Date;
};

export interface TweetService {
  postTweet(content: Content): Promise<void>;
  onTweetChanges(filter: TweetFilter, callback: TweetsHandler): () => void;
  deleteTweet(tweetId: string): Promise<void>;
}

import { ID, Tweet } from '@luudvan94/hey-memory-shared-models';

export type TweetsHandler = (tweets: Tweet[]) => void;
export type TweetFilter = {
  selectedDate?: Date;
  parentTweetId?: ID;
  sorting?: 'desc' | 'asc';
};

export interface TweetService {
  postTweet(content: TweetContent): Promise<void>;
  onTweetChanges(filter: TweetFilter, callback: TweetsHandler): () => void;
  deleteTweet(tweetId: string): Promise<void>;
  getPhotoUrls: (tweetId: string) => Promise<TweetPhotoUrls>;
}

export type TweetContent = Omit<Tweet, 'id' | 'createdAt'>;
export type TweetPhotoUrls = {
  photoUrl?: string;
  thumbnail?: string;
};

export const content = {
  user: {
    logOut: 'Log out'
  },
  tweet: {
    cancel: 'Cancel',
    newTweet: 'New Tweet',
    placeholder: 'Start your tweet...',
    post: 'Post'
  }
};

export type HotStateContent = typeof content;
export type UserContent = (typeof content.user)[keyof typeof content.user];
export type TweetContent = (typeof content.tweet)[keyof typeof content.tweet];

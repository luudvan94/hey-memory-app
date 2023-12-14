export const content = {
  back: 'Back',
  home: {
    noTweet: 'There is no tweet yet.'
  },
  user: {
    logOut: 'Log out'
  },
  tweet: {
    cancel: 'Cancel',
    newTweet: 'New Tweet',
    placeholder: 'Start your tweet...',
    post: 'Post'
  },
  search: {
    search: 'Search',
    recent: 'Recent',
    clear: 'Clear',
    typeHere: 'Type here...'
  },
  dialog: {
    delete: {
      title: 'Delete',
      message: 'Are you sure you want to delete this tweet?',
      yes: 'Yes',
      no: 'No'
    }
  }
};

export type HotStateContent = typeof content;
export type UserContent = (typeof content.user)[keyof typeof content.user];
export type TweetContent = (typeof content.tweet)[keyof typeof content.tweet];

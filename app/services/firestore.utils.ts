export const Constants = {
  USERS: 'users',
  TWEETS: 'tweets'
};

export const generateTweetId = () => {
  // generate id by this format ddmmyyyy_randomID
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const randomId = Math.random().toString(36).substr(2, 9);
  return `${day}${month}${year}_${randomId}`;
};

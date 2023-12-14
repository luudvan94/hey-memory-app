import { Tweet } from '@luudvan94/hey-memory-shared-models';
import { useEffect, useState } from 'react';

import { useHotStateContext } from 'app/context/hotState/hotState.context';
import { TweetFilter } from 'app/services/tweet/tweet.service';

export const useFirestoreTweet = (filter: TweetFilter) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const { tweetService } = useHotStateContext();

  useEffect(() => {
    const subscriber = tweetService.onTweetChanges(filter, (tweets) => {
      setTweets(tweets);
    });

    return () => subscriber();
  }, [filter, tweetService]);

  return { tweets };
};

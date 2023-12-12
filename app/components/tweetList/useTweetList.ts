import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { useAsyncResource } from 'use-async-resource';

import { useHotStateContext } from 'app/context/hotState/hotState.context';
import { TweetFilter } from 'app/services/tweet/tweet.service';

export const useTweetList = (filter: TweetFilter) => {
  const { tweetService } = useHotStateContext();
  const [tweetsReader, getTweet] = useAsyncResource(
    tweetService.getTweets,
    filter
  );

  useFocusEffect(
    useCallback(() => {
      getTweet(filter);
    }, [filter, getTweet])
  );

  return { tweetsReader };
};

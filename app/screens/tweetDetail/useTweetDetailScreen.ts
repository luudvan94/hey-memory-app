import { RouteProp, useRoute } from '@react-navigation/native';
import { useMemo } from 'react';

import { TweetStackParamList } from 'app/context/hotState/hotState.navigator';
import { Screens } from 'app/utils/screens.const';

export const useTweetDetailScreen = () => {
  const routeProps =
    useRoute<RouteProp<TweetStackParamList, Screens.TWEET_DETAIL>>();

  const filter = useMemo(() => {
    if (!routeProps?.params.parentTweet?.id) {
      //TODO: log error
      throw new Error("Can't find parentTweetId");
    }

    return {
      parentTweetId: routeProps?.params.parentTweet?.id,
      sorting: 'asc' as 'asc' | 'desc'
    };
  }, [routeProps?.params.parentTweet?.id]);

  return { parentTweet: routeProps?.params.parentTweet, filter };
};

import { Tweet } from '@luudvan94/hey-memory-shared-models';
import { useCallback } from 'react';

import { useHotStateContext } from 'app/context/hotState/hotState.context';
import { useFirestoreTweet } from 'app/hooks/useFirestoreTweet';
import { log } from 'app/hooks/useLogger';
import { TweetFilter } from 'app/services/tweet/tweet.service';

export const useTweetList = (filter: TweetFilter) => {
  const { tweetService } = useHotStateContext();
  const { tweets } = useFirestoreTweet(filter);

  const deleteTweet = useCallback(
    (tweet: Tweet) => {
      log.debug('deleteTweet on TweetList');

      tweetService.deleteTweet(tweet.id);
    },
    [tweetService]
  );

  return { tweets, deleteTweet };
};

import { Tweet } from '@luudvan94/hey-memory-shared-models';
import { useEffect, useState } from 'react';

import { useHotStateContext } from 'app/context/hotState/hotState.context';
import { TweetPhotoUrls } from 'app/services/tweet/tweet.service';

export const useTweetContent = (tweet: Tweet) => {
  const { tweetService } = useHotStateContext();
  const [photoUrls, setPhotoUrls] = useState<TweetPhotoUrls>({});

  useEffect(() => {
    if (tweet) {
      tweetService.getPhotoUrls(tweet.id).then((photoUrls) => {
        setPhotoUrls(photoUrls);
      });
    }
  }, [tweet, tweetService]);
  return { photoUrls };
};

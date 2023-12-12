import React, { useContext } from 'react';

import { TweetService } from 'app/services/tweet/tweet.service';

import { HotStateContent } from './hotState.content';

type HotStateContextValue = {
  content: HotStateContent;
  tweetService: TweetService;
};

const HotStateContext = React.createContext<HotStateContextValue | undefined>(
  undefined
);

const useHotStateContext = () => {
  const context = useContext(HotStateContext);
  if (!context) {
    throw new Error(
      'useHotStateContext must be used within a HotStateProvider'
    );
  }

  return context;
};

export { HotStateContext, HotStateContextValue, useHotStateContext };

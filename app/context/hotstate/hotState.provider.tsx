import React, { useMemo } from 'react';

import HotStateNavigator from 'app/context/hotState/hotState.navigator';
import { FirebaseTweetService } from 'app/services/tweet/firestoreTweet.service';

import { content } from './hotState.content';
import { HotStateContext, HotStateContextValue } from './hotState.context';
import { useAuthProvider } from '../auth/auth.context';

const HotStateProvider = () => {
  const { user } = useAuthProvider();
  const tweetService = useMemo(() => new FirebaseTweetService(user), [user]);
  const initialValue: HotStateContextValue = useMemo(() => {
    return { content, tweetService };
  }, [tweetService]);

  return (
    <HotStateContext.Provider value={initialValue}>
      <HotStateNavigator />
    </HotStateContext.Provider>
  );
};

export { HotStateProvider };

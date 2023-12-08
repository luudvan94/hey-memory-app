import React, { useMemo } from 'react';

import HotStateNavigator from 'app/context/hotState/hotState.navigator';

import { content } from './hotState.content';
import { HotStateContext, HotStateContextValue } from './hotState.context';

const HotStateProvider = () => {
  const initialValue: HotStateContextValue = useMemo(() => {
    return { content };
  }, []);

  return (
    <HotStateContext.Provider value={initialValue}>
      <HotStateNavigator />
    </HotStateContext.Provider>
  );
};

export { HotStateProvider };

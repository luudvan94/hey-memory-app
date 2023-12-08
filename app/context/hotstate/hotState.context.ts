import React, { useContext } from 'react';

import { HotStateContent } from './hotState.content';

type HotStateContextValue = {
  content: HotStateContent;
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

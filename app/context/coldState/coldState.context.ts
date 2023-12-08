import React from 'react';

import { ColdStateContent } from './coldState.content';

type ColdStateContextValue = {
  content: ColdStateContent;
};

const ColdStateContext = React.createContext<ColdStateContextValue | undefined>(
  undefined
);

const useColdStateContext = () => {
  const context = React.useContext(ColdStateContext);
  if (!context) {
    throw new Error(
      'useColdStateContext must be used within a ColdStateProvider'
    );
  }

  return context;
};

export { ColdStateContext, ColdStateContextValue, useColdStateContext };

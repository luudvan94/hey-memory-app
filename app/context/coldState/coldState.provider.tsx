import React from 'react';

import ColdStateNavigator from 'app/context/coldState/coldState.navigator';

import { content } from './coldState.content';
import { ColdStateContext, ColdStateContextValue } from './coldState.context';

const ColdStateProvider = () => {
  const initialValue: ColdStateContextValue = React.useMemo(() => {
    return { content };
  }, []);
  return (
    <ColdStateContext.Provider value={initialValue}>
      <ColdStateNavigator />
    </ColdStateContext.Provider>
  );
};

export { ColdStateProvider };

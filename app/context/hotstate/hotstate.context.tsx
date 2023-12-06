import React, { useContext, useMemo } from 'react';

import HotStateNavigator from 'app/navigation/hotStateNavigator';

import { HotStateStyles, defaultStyles } from './hotState.style';
import { useThemeProvider } from '../theme/theme.context';

type HotStateContextValue = {
  styles: HotStateStyles;
};

export const HotStateContext = React.createContext<
  HotStateContextValue | undefined
>(undefined);

const HotStateProvider = () => {
  const theme = useThemeProvider();
  const initialValue: HotStateContextValue = useMemo(() => {
    return { styles: defaultStyles(theme) };
  }, [theme]);

  return (
    <HotStateContext.Provider value={initialValue}>
      <HotStateNavigator />
    </HotStateContext.Provider>
  );
};

const useHotStateContext = () => {
  const context = useContext(HotStateContext);
  if (!context) {
    throw new Error(
      'useHotStateContext must be used within a HotStateProvider'
    );
  }

  return context;
};

export { HotStateProvider, useHotStateContext };

import React, { useMemo } from 'react';

import HotStateNavigator from 'app/navigation/hotStateNavigator';

import { HotStateContext, HotStateContextValue } from './hotState.context';
import { defaultStyles } from './hotState.style';
import { useThemeProvider } from '../theme/theme.context';

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

export { HotStateProvider };

import React from 'react';

import ColdStateNavigator from 'app/context/coldState/coldState.navigator';

import { content } from './coldState.content';
import { ColdStateContext, ColdStateContextValue } from './coldState.context';
import { defaultStyles } from './coldState.style';
import { useThemeProvider } from '../theme/theme.context';

const ColdStateProvider = () => {
  const theme = useThemeProvider();
  const initialValue: ColdStateContextValue = React.useMemo(() => {
    return { styles: defaultStyles(theme), content };
  }, [theme]);
  return (
    <ColdStateContext.Provider value={initialValue}>
      <ColdStateNavigator />
    </ColdStateContext.Provider>
  );
};

export { ColdStateProvider };

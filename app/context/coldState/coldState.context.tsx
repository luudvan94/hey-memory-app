import React, { useMemo } from 'react';

import ColdStateNavigator from 'app/navigation/coldStateNavigator';

import { ColdStateContent, content } from './coldState.content';
import { ColdStateStyles, defaultStyles } from './coldState.style';
import { useThemeProvider } from '../theme/theme.context';

type ColdStateContextValue = {
  styles: ColdStateStyles;
  content: ColdStateContent;
};
const ColdStateContext = React.createContext<ColdStateContextValue | undefined>(
  undefined
);

const ColdStateProvider = () => {
  const theme = useThemeProvider();
  const initialValue: ColdStateContextValue = useMemo(() => {
    return { styles: defaultStyles(theme), content };
  }, [theme]);
  return (
    <ColdStateContext.Provider value={initialValue}>
      <ColdStateNavigator />
    </ColdStateContext.Provider>
  );
};

const useColdStateContext = () => {
  const context = React.useContext(ColdStateContext);
  if (!context) {
    throw new Error(
      'useColdStateContext must be used within a ColdStateProvider'
    );
  }

  return context;
};

export { ColdStateProvider, useColdStateContext };

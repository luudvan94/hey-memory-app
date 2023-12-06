import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { Theme, colorSchemeThemes } from '../../styles/theme/theme';

const initialTheme: Theme = colorSchemeThemes.light;

type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();

  const theme = useMemo(
    () => (colorScheme ? colorSchemeThemes[colorScheme] : initialTheme),
    [colorScheme]
  );

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

const useThemeProvider = (): Theme => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context.theme;
};

export { ThemeProvider, useThemeProvider };

import { ThemeProvider } from '@rneui/themed';
import { useFonts } from 'expo-font';
import React from 'react';

import AppInner from 'app/appInner';
import { AuthProvider } from 'app/context/auth/auth.context';
import { theme } from 'app/styles/theme';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Light.otf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AppInner />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

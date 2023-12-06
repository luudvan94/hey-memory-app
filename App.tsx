import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useState } from 'react';

import { ColdStateProvider } from 'app/context/coldState/coldState.context';
import { HotStateProvider } from 'app/context/hotState/hotState.context';
import { ThemeProvider } from 'app/styles/theme';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Light.otf')
  });

  const [loggedIn] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ThemeProvider>
        {loggedIn ? <HotStateProvider /> : <ColdStateProvider />}
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import { useFonts } from 'expo-font';
import { LogBox, useColorScheme } from 'react-native';

import AppInner from 'app/appInner';
import { AuthProvider } from 'app/context/auth/auth.context';
import { theme } from 'app/styles/theme';

LogBox.ignoreLogs(['Sending...']);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Light.otf')
  });

  const scheme = useColorScheme();
  theme.mode = scheme === 'dark' ? 'dark' : 'light';

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AppInner />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;

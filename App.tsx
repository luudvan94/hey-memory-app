import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { LogBox } from 'react-native';

import AppInner from 'app/appInner';
import { AuthProvider } from 'app/context/auth/auth.context';
import { ThemeProvider } from 'app/styles/theme';

LogBox.ignoreLogs(['Sending...']);

function App() {
  // eslint-disable-next-line no-unused-vars
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Light.otf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <AppInner />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;

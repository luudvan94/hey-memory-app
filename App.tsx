import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import AppInner from 'app/appInner';
import { AuthProvider } from 'app/context/auth/auth.context';
import { ThemeProvider } from 'app/styles/theme';

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

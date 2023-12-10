import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';
import { useColorScheme } from 'react-native';

import { useAuthProvider } from 'app/context/auth/auth.context';

import { ColdStateProvider } from './context/coldState/coldState.provider';
import { HotStateProvider } from './context/hotState/hotState.provider';

const AppInner = () => {
  const scheme = useColorScheme();
  const { theme } = useTheme();
  theme.mode = scheme === 'dark' ? 'dark' : 'light';
  const { loggedIn } = useAuthProvider();
  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: theme.colors.grey0,
          background: theme.colors.white,
          card: theme.colors.white,
          text: theme.colors.grey0,
          border: theme.colors.grey5,
          notification: theme.colors.grey0
        },
        dark: theme.mode === 'dark'
      }}
    >
      {loggedIn ? <HotStateProvider /> : <ColdStateProvider />}
    </NavigationContainer>
  );
};

export default AppInner;

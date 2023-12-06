import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Text } from 'app/components';
import { useColdStateContext } from 'app/context/coldState/coldState.context';

import LoginOption from './components/loginOption';
import { useLogin } from './useLogin';

const LoginScreen: React.FC = () => {
  const {
    styles: { loginScreenStyle: styles }
  } = useColdStateContext();

  const { loginOptions } = useLogin();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text title1>Log in to Hey Memory</Text>
        <Text body secondary>
          Manage your account and more
        </Text>
      </View>

      <View style={styles.options}>
        {loginOptions.map(({ icon, label, handler }) => (
          <LoginOption icon={icon} label={label} onPress={handler} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Text } from 'app/components';
import { useColdStateContext } from 'app/context/coldState/coldState.context';

import LoginOption from './components/loginOption';
import useStyles from './loginScreen.style';
import { useLogin } from './useLogin';

const LoginScreen: React.FC = () => {
  const {
    content: { login: content }
  } = useColdStateContext();
  const styles = useStyles();
  const { loginOptions } = useLogin();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text title1>{content.title}</Text>
        <Text body secondary>
          {content.description}
        </Text>
      </View>

      <View style={styles.options}>
        {loginOptions.map(({ icon, label, handler }) => (
          <LoginOption
            key={label}
            icon={icon}
            label={label}
            onPress={handler}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

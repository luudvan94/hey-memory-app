import { Button } from '@rneui/themed';
import { View } from 'react-native';

import { Text } from 'app/components';
import { useHotStateContext } from 'app/context/hotState/hotState.context';

import { useUserScreen } from './useUserScreen';
import useStyles from './userScreen.style';

const UserScreen: React.FC = () => {
  const {
    content: { user: content }
  } = useHotStateContext();

  const styles = useStyles();

  const { logout } = useUserScreen();

  return (
    <View style={styles.container}>
      <View>
        <Text title1>Hello, user</Text>
        <Text body secondary>
          Hope you're having a great experience
        </Text>
      </View>
      <Button
        buttonStyle={styles.button}
        title={content.logOut}
        onPress={logout}
      />
    </View>
  );
};

export { UserScreen };

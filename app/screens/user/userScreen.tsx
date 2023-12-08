import { View } from 'react-native';

import { Button, Text } from 'app/components';
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
      <Button onPress={logout}>
        <Text body>{content.logOut}</Text>
      </Button>
    </View>
  );
};

export { UserScreen };

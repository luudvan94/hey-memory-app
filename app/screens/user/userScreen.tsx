import { View } from 'react-native';

import { Button, Text } from 'app/components';
import { useHotStateContext } from 'app/context/hotState/hotState.context';

import { useUserScreen } from './useUserScreen';

const UserScreen: React.FC = () => {
  const {
    styles: { userScreenStyle: styles },
    content: { user: content }
  } = useHotStateContext();

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

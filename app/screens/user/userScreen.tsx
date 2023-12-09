import { Button } from '@rneui/themed';
import { View } from 'react-native';

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
      <Button title={content.logOut} onPress={logout} />
    </View>
  );
};

export { UserScreen };

import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import { Button, Text } from 'app/components';
import { useHotStateContext } from 'app/context/hotState/hotState.context';

const Header: React.FC = () => {
  const {
    styles: { homeHeaderStyle: styles }
  } = useHotStateContext();
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-undo-circle" size={25} />
      <Button onPress={() => {}}>
        <Text title2>thu, 7 dec 2023</Text>
      </Button>
      <Ionicons name="arrow-redo-circle" size={25} />
    </View>
  );
};

export default Header;

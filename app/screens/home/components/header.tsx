import { View } from 'react-native';

import { Button, Text } from 'app/components';
import { useHotStateContext } from 'app/context/hotState/hotState.context';

const Header: React.FC = () => {
  const {
    styles: { homeHeaderStyle: styles }
  } = useHotStateContext();
  return (
    <View style={styles.container}>
      <Button onPress={() => {}} overrideStyles={styles.header}>
        <Text title2>thu, 7 dec 2023</Text>
      </Button>
    </View>
  );
};

export default Header;

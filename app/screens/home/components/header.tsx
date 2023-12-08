import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import { Button, Text } from 'app/components';

import useStyles from './header.style';

const Header: React.FC = () => {
  const styles = useStyles();
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

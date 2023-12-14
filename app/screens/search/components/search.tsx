import { Ionicons } from '@expo/vector-icons';
import { Button } from '@rneui/base';
import { Divider, useTheme } from '@rneui/themed';
import { View } from 'react-native';

import { Text } from 'app/components';

import useStyles from './search.style';

interface SearchProps {
  onPress: () => void;
}

export const Search: React.FC<SearchProps> = ({ onPress }) => {
  const styles = useStyles();
  const {
    theme: { colors }
  } = useTheme();

  return (
    <Button onPress={onPress} buttonStyle={styles.buttonStyle}>
      <View style={styles.container}>
        <Ionicons name="search" size={20} color={colors.grey3} />
        <View style={{ flex: 1 }}>
          <View style={styles.content}>
            <Text body>test search recent</Text>
          </View>

          <Divider color={colors.grey4} />
        </View>
      </View>
    </Button>
  );
};

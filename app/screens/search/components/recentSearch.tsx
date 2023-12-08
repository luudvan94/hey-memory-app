import { Button } from '@rneui/themed';
import { View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Text } from 'app/components';
import { useHotStateContext } from 'app/context/hotState/hotState.context';

import useStyles from './recentSearch.style';
import { Search } from './search';

interface RecentSearchProps {
  style?: ViewStyle;
}
const RecentSearch: React.FC<RecentSearchProps> = ({ style }) => {
  const {
    content: { search: content }
  } = useHotStateContext();
  const styles = useStyles();
  return (
    <ScrollView
      style={{ ...style, ...styles.container }}
      keyboardDismissMode="on-drag"
    >
      <View style={styles.header}>
        <Text callout bold>
          {content.recent}
        </Text>
        <Button
          title={content.clear}
          buttonStyle={styles.clearButton}
          titleStyle={styles.clearTitle}
        />
      </View>

      <View style={styles.listContainer}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Search key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default RecentSearch;

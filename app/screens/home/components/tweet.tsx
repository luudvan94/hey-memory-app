import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import { Text } from 'app/components';
import { useHotStateContext } from 'app/context/hotState/hotState.context';

const Tweet: React.FC = () => {
  const {
    styles: { tweetStyle: styles }
  } = useHotStateContext();
  return (
    <View>
      <View style={styles.container}>
        {/* <Ionicons name="person-circle" size={30} /> */}
        <View style={styles.content}>
          <Text headline>test tweet</Text>
          <View style={styles.footer}>
            <Text callout secondary>
              07-12-2023
            </Text>
            <View style={styles.dateTime}>
              <Text callout secondary>
                14:54
              </Text>
              <Ionicons name="ellipsis-horizontal" size={15} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.border} />
    </View>
  );
};

export { Tweet };

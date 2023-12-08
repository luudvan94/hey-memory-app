import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@rneui/themed';
import { View } from 'react-native';

import { Text } from 'app/components';

import useStyles from './tweet.style';

const Tweet: React.FC = () => {
  const {
    theme: { colors }
  } = useTheme();
  const styles = useStyles();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text headline>
            Maximum pool size of ThreadPoolExecutor. Defaults to 1. Larger
            values typically improve performance when executing large numbers of
            asynchronous tasks, e.g. Firestore queries. Setting this value to 0
            completely disables the pooled executor and all tasks execute in
            serial per module.
          </Text>

          <View style={styles.footer}>
            <Text callout secondary>
              07-12-2023
            </Text>
            <View style={styles.dateTime}>
              <View style={styles.actions}>
                <Ionicons
                  name="bookmark-outline"
                  size={20}
                  color={colors.grey2}
                />
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={20}
                  color={colors.grey2}
                />
              </View>
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

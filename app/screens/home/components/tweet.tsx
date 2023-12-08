import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@rneui/themed';
import { Image } from 'expo-image';
import { View } from 'react-native';

import { Text } from 'app/components';

import useStyles from './tweet.style';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Tweet: React.FC = () => {
  const {
    theme: { colors }
  } = useTheme();
  const styles = useStyles();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text headline>eating a lot of food and drinking a lot of water</Text>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              placeholder={blurhash}
              contentFit="cover"
              source={'https://picsum.photos/seed/696/3000/2000'}
            />
          </View>

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

import { makeStyles } from '@rneui/themed';
import { Image } from 'expo-image';
import { StyleProp, View, ViewStyle } from 'react-native';

import { Text } from './text';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

interface TweetContentProps {
  containerStyle?: StyleProp<ViewStyle>;
  unActionable?: false | undefined;
}
const TweetContent: React.FC<TweetContentProps> = ({ containerStyle }) => {
  const styles = useStyles();
  return (
    <View style={[styles.tweetContent, containerStyle]}>
      <Text headline>eating a lot of food and drinking a lot of water</Text>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          placeholder={blurhash}
          contentFit="cover"
          source={'https://picsum.photos/seed/696/3000/2000'}
        />
      </View>
    </View>
  );
};

export { TweetContent };

const useStyles = makeStyles(({ spacing }, props) => ({
  tweetContent: {
    display: 'flex',
    gap: spacing.xl
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  image: {
    flex: 1,
    height: 200,
    borderRadius: 10
  }
}));

import { makeStyles } from '@rneui/themed';
import { StyleProp, View, ViewStyle } from 'react-native';

import { Text } from './text';

interface TweetContentProps {
  containerStyle?: StyleProp<ViewStyle>;
  unActionable?: false | undefined;
}
const TweetContent: React.FC<TweetContentProps> = ({ containerStyle }) => {
  const styles = useStyles();
  return (
    <View style={[styles.tweetContent, containerStyle]}>
      <Text headline>
        eating a lot of food and drinking a lot of food hahaha
      </Text>
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

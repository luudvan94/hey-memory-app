import { Content } from '@luudvan94/hey-memory-shared-models';
import { makeStyles } from '@rneui/themed';
import { StyleProp, View, ViewStyle } from 'react-native';

import { Text } from './text';

interface TweetContentProps {
  containerStyle?: StyleProp<ViewStyle>;
  unActionable?: false | undefined;
  content: Content;
}
const TweetContent: React.FC<TweetContentProps> = ({
  containerStyle,
  content
}) => {
  const styles = useStyles();
  return (
    <View style={[styles.tweetContent, containerStyle]}>
      <Text headline>{content}</Text>
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

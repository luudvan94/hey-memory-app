import { View } from 'react-native';

import { Button, Text } from 'app/components';
import { useHotStateContext } from 'app/context/hotState/hotState.context';

const TweetHeader = () => {
  const {
    styles: { tweetHeaderStyle: styles },
    content: { tweet: content }
  } = useHotStateContext();
  return (
    <View style={styles.container}>
      <View style={styles.cancel}>
        <Button onPress={() => {}}>
          <Text body>{content.cancel}</Text>
        </Button>
      </View>
    </View>
  );
};

export default TweetHeader;

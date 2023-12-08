import { Button } from '@rneui/themed';
import { View } from 'react-native';

import { useHotStateContext } from 'app/context/hotState/hotState.context';

import useStyles from './tweetHeader.style';

const TweetHeader = () => {
  const {
    content: { tweet: content }
  } = useHotStateContext();
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Button
        title={content.cancel}
        titleStyle={styles.cancel}
        buttonStyle={styles.cancelContainer}
      />
    </View>
  );
};

export default TweetHeader;

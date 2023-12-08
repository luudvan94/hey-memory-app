import { useHeaderHeight } from '@react-navigation/elements';
import { Button } from '@rneui/themed';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { useHotStateContext } from 'app/context/hotState/hotState.context';

import useStyles from './tweetScreen.style';
import { useTweetScreen } from './useTweetScreen';

const TweetScreen: React.FC = () => {
  const {
    content: { tweet: content }
  } = useHotStateContext();

  const styles = useStyles();

  const height = useHeaderHeight();
  const { text, setText } = useTweetScreen();
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height + 40}
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      <View style={styles.container}>
        <TextInput
          multiline
          autoFocus
          style={styles.textInput}
          value={text}
          placeholder={content.placeholder}
          onChangeText={(val) => setText(val)}
        />

        <Button
          title={content.post}
          buttonStyle={styles.postButton}
          titleStyle={styles.post}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default TweetScreen;

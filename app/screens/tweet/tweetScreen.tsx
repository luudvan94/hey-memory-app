import { useHeaderHeight } from '@react-navigation/elements';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Button, Text } from 'app/components';
import { useHotStateContext } from 'app/context/hotState/hotState.context';

import { useTweetScreen } from './useTweetScreen';

const TweetScreen: React.FC = () => {
  const {
    styles: { tweetScreenStyle: styles },
    content: { tweet: content }
  } = useHotStateContext();

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
          autoFocus
          style={styles.textInput}
          value={text}
          placeholder={content.placeholder}
          onChangeText={(val) => setText(val)}
        />

        <Button onPress={() => {}} overrideStyles={styles.postButton}>
          <Text callout style={styles.post}>
            {content.post}
          </Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TweetScreen;

import { useHeaderHeight } from '@react-navigation/elements';
import { Button } from '@rneui/themed';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

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
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput
            multiline
            autoFocus
            style={styles.textInput}
            value={text}
            placeholder={content.placeholder}
            onChangeText={(val) => setText(val)}
          />
        </ScrollView>

        <KeyboardAvoidingView
          keyboardVerticalOffset={height + 70}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          enabled
        >
          <View style={styles.footer}>
            <View style={styles.tools}>
              <Button
                icon={{
                  name: 'image',
                  type: 'ionicons',
                  size: 25,
                  color: 'grey'
                }}
                buttonStyle={styles.buttonStyle}
              />
              <Button
                icon={{
                  name: 'camera',
                  type: 'font-awesome',
                  size: 23,
                  color: 'grey'
                }}
                buttonStyle={styles.buttonStyle}
              />
            </View>
            <Button
              title={content.post}
              buttonStyle={styles.postButton}
              titleStyle={styles.post}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default TweetScreen;

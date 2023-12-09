import React from 'react';
import { View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { useHotStateContext } from 'app/context/hotState/hotState.context';

import { Footer } from './footer/footer';
import useStyles from './tweetScreen.style';
import { useTweetScreen } from './useTweetScreen';

const TweetScreen: React.FC = () => {
  const {
    content: { tweet: content }
  } = useHotStateContext();
  const scrollViewRef = React.useRef<ScrollView>(null);
  const styles = useStyles();
  const { text, setText } = useTweetScreen();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
          <TextInput
            onContentSizeChange={(event) => {
              scrollViewRef.current?.scrollToEnd({ animated: true });
            }}
            multiline
            autoFocus
            style={styles.textInput}
            value={text}
            placeholder={content.placeholder}
            onChangeText={(val) => setText(val)}
          />

          <View style={{ height: 30 }} />
        </ScrollView>

        <Footer />
      </View>
    </View>
  );
};

export default TweetScreen;

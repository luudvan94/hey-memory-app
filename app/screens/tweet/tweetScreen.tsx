import { Divider } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { TweetContent } from 'app/components';
import { AssetContainer } from 'app/components/assetContainer';
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
  const [assetContainerHeight, setAssetContainerHeight] =
    React.useState<number>(0);

  const { text, setText, onAssetSelected, selectedAssets } = useTweetScreen();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          onLayout={(event) => {
            if (assetContainerHeight === 0) {
              // when there is no asset selected, scroll to the end of textinput
              scrollViewRef.current?.scrollToEnd({ animated: true });
            }
          }}
        >
          <View style={styles.parentContainer}>
            <Divider style={styles.divider} />
            <TweetContent containerStyle={styles.parentTweet} />
          </View>
          <TextInput
            onLayout={(layout) => {
              const { height, y } = layout.nativeEvent.layout;
              scrollViewRef.current?.scrollTo({
                y: y + height - assetContainerHeight - 30,
                animated: true
              });
            }}
            multiline
            autoFocus
            style={styles.textInput}
            value={text}
            placeholder={content.placeholder}
            onChangeText={(val) => setText(val)}
          />

          {selectedAssets.length > 0 ? (
            <AssetContainer
              onLayout={(w, h) => {
                setAssetContainerHeight(h);
              }}
              assets={selectedAssets}
              containerStyle={styles.assetContainer}
            />
          ) : null}

          <View style={{ height: 30 }} />
        </ScrollView>

        <Footer onAssetSelected={onAssetSelected} />
      </View>
    </View>
  );
};

export default TweetScreen;

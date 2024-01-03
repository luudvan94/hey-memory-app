import { Tweet } from '@luudvan94/hey-memory-shared-models';
import { makeStyles } from '@rneui/themed';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import ImageView from 'react-native-image-viewing';

import { Text } from './text';
import { useTweetContent } from './useTweetContent';

interface TweetContentProps {
  containerStyle?: StyleProp<ViewStyle>;
  unActionable?: false | undefined;
  tweet: Tweet;
}

const TweetContent: React.FC<TweetContentProps> = ({
  containerStyle,
  tweet
}) => {
  const { photoUrls } = useTweetContent(tweet);
  const styles = useStyles();
  const [photoViewerVisible, setPhotoViewerVisible] = useState(false);
  return (
    <>
      <View style={[styles.tweetContent, containerStyle]}>
        <Text headline>{tweet.content}</Text>

        {photoUrls.thumbnail ? (
          <View style={styles.imageContainer}>
            <Pressable onPress={() => setPhotoViewerVisible(true)}>
              <Image
                contentPosition={'left'}
                style={styles.image}
                contentFit="contain"
                source={photoUrls.thumbnail}
              />
            </Pressable>
          </View>
        ) : null}
      </View>
      <ImageView
        images={[{ uri: photoUrls.photoUrl }]}
        imageIndex={0}
        visible={photoViewerVisible}
        onRequestClose={() => setPhotoViewerVisible(false)}
      />
    </>
  );
};

export { TweetContent };

const useStyles = makeStyles(({ spacing }, props) => ({
  tweetContent: {
    display: 'flex',
    gap: spacing.md
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  image: {
    // width: 'auto',
    // flex: 1,
    height: 200
  }
}));

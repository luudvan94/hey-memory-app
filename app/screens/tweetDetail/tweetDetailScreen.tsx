import { NavigationProp, useNavigation } from '@react-navigation/native';
import { makeStyles } from '@rneui/themed';
import { useEffect, useMemo } from 'react';
import { View } from 'react-native';

import { TweetList } from 'app/components/tweetList/tweetList';
import { TweetStackParamList } from 'app/context/hotState/hotState.navigator';
import { Screens } from 'app/utils/screens.const';

import { useTweetDetailScreen } from './useTweetDetailScreen';
import { Tweet } from '../home/components/tweet';

const TweetDetailScreen: React.FC = () => {
  const styles = useStyles();
  const { parentTweet, filter } = useTweetDetailScreen();
  const navigation = useNavigation<NavigationProp<TweetStackParamList>>();

  useEffect(() => {
    navigation.setOptions({ title: parentTweet.content });
  }, [navigation, parentTweet.content]);

  const parentTweetComp = useMemo(() => {
    return (
      <Tweet
        pressable={false}
        tweet={parentTweet}
        onChatBubblePress={() => {
          navigation.navigate(Screens.TWEET_MODAL, {
            parentTweet
          });
        }}
      />
    );
  }, [navigation, parentTweet]);
  return (
    <View style={styles.container}>
      <TweetList
        containerStyle={{ flex: 1 }}
        header={parentTweetComp}
        filter={filter}
      />
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1
  }
}));
export default TweetDetailScreen;

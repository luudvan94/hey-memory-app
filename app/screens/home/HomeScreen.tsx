import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TweetList } from 'app/components/tweetList/tweetList';
import { TweetStackParamList } from 'app/context/hotState/hotState.navigator';
import { Screens } from 'app/utils/screens.const';

import useStyles from './HomeScreen.style';
import Header from './components/header';
import { useHomeScreen } from './useHomeScreen';

type HomeScreenProps = object;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const styles = useStyles();
  const navigation = useNavigation<StackNavigationProp<TweetStackParamList>>();

  const { filter, selectedDate, updateSelectedDay } = useHomeScreen();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        selectedDate={selectedDate}
        updateSelectedDate={updateSelectedDay}
      />
      <TweetList
        filter={filter}
        onTweetPress={() => {
          navigation.navigate(Screens.TWEET_DETAIL);
        }}
        containerStyle={styles.eventsList}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;

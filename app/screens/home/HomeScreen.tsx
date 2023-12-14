import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TweetList } from 'app/components/tweetList/tweetList';

import useStyles from './HomeScreen.style';
import Header from './components/header';
import { useHomeScreen } from './useHomeScreen';

type HomeScreenProps = object;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const styles = useStyles();

  const { filter, selectedDate, updateSelectedDay } = useHomeScreen();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        selectedDate={selectedDate}
        updateSelectedDate={updateSelectedDay}
      />
      <TweetList filter={filter} containerStyle={styles.eventsList} />
    </SafeAreaView>
  );
};
export default HomeScreen;

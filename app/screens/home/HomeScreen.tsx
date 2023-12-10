import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TweetList } from 'app/components/tweetList';
import { TweetStackParamList } from 'app/context/hotState/hotState.navigator';
import {
  WithTweetActionDialogProps,
  withTweetActionDialog
} from 'app/hoc/withTweetActionDialog';
import { Screens } from 'app/utils/screens.const';

import Header from './components/header';
import useStyles from './homeScreen.style';

type HomeScreenProps = object;

const HomeScreen: React.FC<HomeScreenProps & WithTweetActionDialogProps> = ({
  openDeleteDialog
}) => {
  const styles = useStyles();
  const [loading] = React.useState(false);
  const navigation = useNavigation<StackNavigationProp<TweetStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <TweetList
          onActionPress={openDeleteDialog}
          onTweetPress={() => {
            navigation.navigate(Screens.TWEET_DETAIL);
          }}
          header={<Header />}
          containerStyle={styles.eventsList}
        />
      )}
    </SafeAreaView>
  );
};

export default withTweetActionDialog(HomeScreen);

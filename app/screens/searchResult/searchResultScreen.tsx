import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';

import { TweetList } from 'app/components/tweetList';
import { TweetStackParamList } from 'app/context/hotState/hotState.navigator';
import {
  WithTweetActionDialogProps,
  withTweetActionDialog
} from 'app/hoc/withTweetActionDialog';
import { Screens } from 'app/utils/screens.const';

import useStyles from './searchResult.style';

interface SearchResultScreenProps {}
const SearchResultScreen: React.FC<
  SearchResultScreenProps & WithTweetActionDialogProps
> = ({ openDeleteDialog }) => {
  const styles = useStyles();

  const navigation = useNavigation<StackNavigationProp<TweetStackParamList>>();

  return (
    <View style={styles.container}>
      <TweetList
        onActionPress={openDeleteDialog}
        onTweetPress={() => {
          navigation.navigate(Screens.TWEET_DETAIL);
        }}
        containerStyle={styles.eventList}
      />
    </View>
  );
};

export default withTweetActionDialog(SearchResultScreen);

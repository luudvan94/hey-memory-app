import { View } from 'react-native';

import { TweetList } from 'app/components/tweetList/tweetList';
import {
  WithTweetActionDialogProps,
  withTweetActionDialog
} from 'app/hoc/withTweetActionDialog';

import useStyles from './searchResult.style';

interface SearchResultScreenProps {}
const SearchResultScreen: React.FC<
  SearchResultScreenProps & WithTweetActionDialogProps
> = ({ openDeleteDialog }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <TweetList
        filter={{}}
        onTweetPress={() => {}}
        containerStyle={styles.eventList}
      />
    </View>
  );
};

export default withTweetActionDialog(SearchResultScreen);

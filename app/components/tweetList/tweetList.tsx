import { Tweet } from '@luudvan94/hey-memory-shared-models';
import {
  NavigationProp,
  StackActions,
  useNavigation
} from '@react-navigation/native';
import { Dialog, makeStyles, useTheme } from '@rneui/themed';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Text } from 'app/components';
import { useHotStateContext } from 'app/context/hotState/hotState.context';
import { TweetStackParamList } from 'app/context/hotState/hotState.navigator';
import withSuspenseAndErrorBoundary from 'app/hoc/withSuspenseAndErrorBoundary';
import { Tweet as TweetComponent } from 'app/screens/home/components/tweet';
import { TweetFilter } from 'app/services/tweet/tweet.service';
import { Screens } from 'app/utils/screens.const';

import { useTweetList } from './useTweetList';
interface TweetListProps {
  containerStyle?: StyleProp<ViewStyle>;
  onTweetPress?: (tweet: Tweet) => void;
  filter: TweetFilter;
  header?: React.ReactElement;
}

export const TweetList: React.FC<TweetListProps> = withSuspenseAndErrorBoundary(
  ({ containerStyle, onTweetPress, filter, header }: TweetListProps) => {
    const {
      content: { dialog: dialogContent, home: homeContent }
    } = useHotStateContext();

    const styles = useStyles();

    const { tweets, deleteTweet } = useTweetList(filter);
    const { theme } = useTheme();

    const [showDeleteDialog, setShowDeleteDialog] = React.useState(false);
    const [selectedTweet, setSelectedTweet] = React.useState<
      Tweet | undefined
    >(); // eslint-disable-line @typescript-eslint/no-explicit-any
    const navigation = useNavigation<NavigationProp<TweetStackParamList>>();

    const openDeleteDialog = () => {
      setShowDeleteDialog(true);
    };
    const hideDeleteDialog = () => {
      setShowDeleteDialog(false);
    };
    const onChatBubblePress = (tweet: Tweet) => {
      navigation.navigate(Screens.TWEET_MODAL, { parentTweet: tweet });
    };

    const renderEventItem = ({ item }) => {
      return (
        <TweetComponent
          onChatBubblePress={() => {
            onChatBubblePress(item);
          }}
          tweet={item}
          pressable={item.childCount > 0}
          onPress={() => {
            const navigateAction = StackActions.push(Screens.TWEET_DETAIL, {
              key: item.id.toString(),
              parentTweet: item
            });
            navigation.dispatch(navigateAction);
            if (onTweetPress) {
              onTweetPress(item);
            }
          }}
          openDeleteDialog={() => {
            openDeleteDialog();
            setSelectedTweet(item);
          }}
        />
      );
    };

    return (
      <View style={[containerStyle]}>
        <View style={styles.innerContainer}>
          {tweets.length > 0 ? (
            <FlatList
              ListHeaderComponent={header}
              showsVerticalScrollIndicator={false}
              style={styles.eventList}
              data={tweets}
              renderItem={renderEventItem}
              keyExtractor={(item) => item.id.toString()}
            />
          ) : (
            <Text secondary>{homeContent.noTweet}</Text>
          )}
        </View>
        <Dialog
          overlayStyle={{ borderRadius: 10 }}
          isVisible={showDeleteDialog}
          onBackdropPress={hideDeleteDialog}
        >
          <Dialog.Title title={dialogContent.delete.title} />
          <Text>{dialogContent.delete.message}</Text>
          <Dialog.Button
            titleStyle={{ color: theme.colors.grey0 }}
            buttonStyle={styles.button}
            title={dialogContent.delete.no}
            onPress={hideDeleteDialog}
          />
          <Dialog.Button
            titleStyle={{ color: theme.colors.white }}
            buttonStyle={{
              ...styles.button,
              backgroundColor: theme.colors.error
            }}
            title={dialogContent.delete.yes}
            onPress={() => {
              hideDeleteDialog();
              if (selectedTweet) {
                deleteTweet(selectedTweet);
              }
            }}
          />
        </Dialog>
      </View>
    );
  }
);

const useStyles = makeStyles((theme, props) => ({
  innerContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  eventList: {
    flex: 1
  },
  button: {
    backgroundColor: 'transparent'
  }
}));

import { makeStyles } from '@rneui/themed';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import withSuspenseAndErrorBoundary from 'app/hoc/withSuspenseAndErrorBoundary';
import { Tweet as TweetComponent } from 'app/screens/home/components/tweet';
import { TweetFilter } from 'app/services/tweet/tweet.service';

import { useTweetList } from './useTweetList';
interface TweetListProps {
  containerStyle?: StyleProp<ViewStyle>;
  onTweetActionPress: () => void;
  onTweetPress: () => void;
  filter: TweetFilter;
}

export const TweetList: React.FC<TweetListProps> = withSuspenseAndErrorBoundary(
  ({
    containerStyle,
    onTweetActionPress,
    onTweetPress,
    filter
  }: TweetListProps) => {
    const renderEventItem = ({ item }) => {
      return (
        <TweetComponent
          tweet={item}
          pressable={false}
          onPress={onTweetPress}
          openDeleteDialog={onTweetActionPress}
        />
      );
    };
    const styles = useStyles();

    const { tweetsReader } = useTweetList(filter);
    const tweets = tweetsReader();
    return (
      <View style={[containerStyle]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.eventList}
          data={tweets}
          renderItem={renderEventItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
);

const useStyles = makeStyles((theme, props) => ({
  eventList: {
    flex: 1
  }
}));

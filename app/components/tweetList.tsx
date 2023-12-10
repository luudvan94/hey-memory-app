import { makeStyles } from '@rneui/themed';
import React, { ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Tweet } from 'app/screens/home/components/tweet';

interface TweetListProps {
  containerStyle?: StyleProp<ViewStyle>;
  header?: React.ComponentType<any> | ReactElement;
  onActionPress: () => void;
  onTweetPress: () => void;
}

const events = [
  { id: 1, title: 'Event 1' },
  { id: 2, title: 'Event 2' },
  { id: 3, title: 'Event 3' }
  // Add more events as needed
];

export const TweetList: React.FC<TweetListProps> = ({
  containerStyle,
  header,
  onActionPress,
  onTweetPress
}) => {
  const renderEventItem = ({ item }) => {
    return (
      <Tweet
        pressable={false}
        onPress={onTweetPress}
        openDeleteDialog={onActionPress}
      />
    );
  };
  const styles = useStyles();
  return (
    <View style={[containerStyle]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={header}
        style={styles.eventList}
        data={events}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  eventList: {
    flex: 1
  }
}));

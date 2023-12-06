import { FlatList, Text, View } from 'react-native';

import IconButton from 'app/components/IconButton';

import styles from './HomeScreen.style';

type HomeScreenProps = object;

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const events = [
    { id: 1, title: 'Event 1' },
    { id: 2, title: 'Event 2' },
    { id: 3, title: 'Event 3' }
    // Add more events as needed
  ];

  const renderEventItem = ({ item }) => {
    return (
      <View style={styles.event}>
        <Text style={styles.eventContent}>{item.title}</Text>
        <Text style={styles.eventDate}>mon, dec 4</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topBarContainer}>
          <IconButton onPress={() => {}} iconSource="calendar" />
          <View style={styles.trailingBarButtonContainer}>
            <IconButton onPress={() => {}} iconSource="plus" />
          </View>
        </View>
        <Text style={styles.title}>4th December 2023</Text>
      </View>

      <FlatList
        style={styles.eventsList}
        data={events}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;

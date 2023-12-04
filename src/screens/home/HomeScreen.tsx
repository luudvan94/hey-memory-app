import { SafeAreaView, Text, View, FlatList } from 'react-native';

import IconButton from 'src/components/IconButton';

import styles from './HomeScreen.style';

const HomeScreen: React.FC = () => {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topBarContainer}>
          <IconButton onPress={() => {}} iconSource="calendar" />
          <View style={styles.trailingBarButtonContainer}>
            <IconButton onPress={() => {}} iconSource="search" />
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
    </SafeAreaView>
  );
};

export default HomeScreen;

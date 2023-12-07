import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useHotStateContext } from 'app/context/hotState/hotState.context';

import Header from './components/header';
import { Tweet } from './components/tweet';

type HomeScreenProps = object;

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const {
    styles: { homeScreenStyle: styles }
  } = useHotStateContext();

  const events = [
    { id: 1, title: 'Event 1' },
    { id: 2, title: 'Event 2' },
    { id: 3, title: 'Event 3' }
    // Add more events as needed
  ];

  const renderEventItem = ({ item }) => {
    return <Tweet />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header />}
        style={styles.eventsList}
        data={events}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

import { Amplify } from 'aws-amplify';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import amplifyconfig from 'src/amplifyconfiguration.json';
import HomeScreen from 'src/screens/home/HomeScreen';
import SearchScreen from 'src/screens/search/SearchScreen';

Amplify.configure(amplifyconfig);

export default function App() {
  const [showSearch, setShowSearch] = useState(false);

  const onSearchPress = () => {
    setShowSearch(true);
  };

  const onCancelPress = () => {
    setShowSearch(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {showSearch ? (
        <SearchScreen onCancelPress={onCancelPress} />
      ) : (
        <HomeScreen onSearchPress={onSearchPress} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

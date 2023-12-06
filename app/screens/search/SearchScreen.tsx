import React from 'react';
import { TextInput, View } from 'react-native';

import Button from 'app/components/Button';

import styles from './SearchScreen.style';

type SearchScreenProps = object;

const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="your query..."
          placeholderTextColor={'grey'}
          style={styles.input}
        />
        <Button title="Cancel" onPress={() => {}} />
      </View>
    </View>
  );
};

export default SearchScreen;

import React from 'react';
import { TextInput, View } from 'react-native';

import Button from 'src/components/Button';

import styles from './SearchScreen.style';

type SearchScreenProps = {
  onCancelPress: () => void;
};

const SearchScreen: React.FC<SearchScreenProps> = ({ onCancelPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder="your query..."
          placeholderTextColor={'grey'}
          style={styles.input}
        />
        <Button title="Cancel" onPress={onCancelPress} />
      </View>
    </View>
  );
};

export default SearchScreen;

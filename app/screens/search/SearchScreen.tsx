import React from 'react';
import { TextInput, View } from 'react-native';

import Button from 'app/components/Button';
import { useHotStateContext } from 'app/context/hotState/hotState.context';

type SearchScreenProps = object;

const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  const {
    styles: { searchScreenStyle: styles }
  } = useHotStateContext();

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

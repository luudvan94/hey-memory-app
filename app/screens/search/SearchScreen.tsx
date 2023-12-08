import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { SearchBar, useTheme } from '@rneui/themed';
import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import RecentSearch from './components/recentSearch';
import useStyles from './searchScreen.style';
import { useSearchScreen } from './useSearchScreen';

type SearchScreenProps = object;

const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  const styles = useStyles();
  let searchBarRef = useRef<TextInput>();
  const { theme } = useTheme();
  const { searchText, onSearchTextChange } = useSearchScreen();

  useFocusEffect(
    React.useCallback(() => {
      searchBarRef.current?.focus();
    }, [searchBarRef])
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar
          ref={(ref) => {
            searchBarRef = ref;
          }}
          autoFocus={true}
          showCancel
          platform="ios"
          placeholder="Type Here..."
          onChangeText={onSearchTextChange}
          value={searchText}
          inputStyle={styles.input}
          inputContainerStyle={styles.searchBar}
          cancelButtonProps={styles.cancelButton}
          searchIcon={
            <Ionicons
              name="search-outline"
              size={18}
              color={theme.colors.grey3}
            />
          }
        />

        <RecentSearch />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

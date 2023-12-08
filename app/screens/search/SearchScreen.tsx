import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useHotStateContext } from 'app/context/hotState/hotState.context';
import { useThemeProvider } from 'app/styles/theme';

import RecentSearch from './components/recentSearch';
import { useSearchScreen } from './useSearchScreen';

type SearchScreenProps = object;

const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  const {
    styles: { searchScreenStyle: styles }
  } = useHotStateContext();

  const theme = useThemeProvider();
  const { searchText, onSearchTextChange } = useSearchScreen();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SearchBar
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
              color={theme.colors.secondary}
            />
          }
        />

        <RecentSearch />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

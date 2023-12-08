import React from 'react';

const useSearchScreen = () => {
  const [searchText] = React.useState<string | undefined>(undefined); // [1
  const onSearchTextChange = (text: string) => {};
  return { searchText, onSearchTextChange };
};

export { useSearchScreen };

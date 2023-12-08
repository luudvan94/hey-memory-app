import { StyleSheet } from 'react-native';

import { textStyle } from 'app/components';
import { Theme } from 'app/styles/theme';

export const defaultStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      paddingHorizontal: 10,
      height: 50
    },
    searchBar: {
      borderRadius: 20 * theme.scalingNumber,
      backgroundColor: theme.colors.quaternary,
      height: '80%'
    },
    input: {
      ...textStyle.body(theme)
    },
    cancelButton: {
      color: theme.colors.secondary
    }
  });
};

import { StyleSheet } from 'react-native';

import { Theme } from 'app/styles/theme';

export const defaultStyle = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
};

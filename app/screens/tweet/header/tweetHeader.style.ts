import { StyleSheet } from 'react-native';

import { Theme } from 'app/styles/theme';

export const defaultStyle = ({ colors }: Theme) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: colors.tertiary
    },
    cancel: {
      flex: 1
    },
    title: {
      alignSelf: 'center'
    }
  });
};

import { StyleSheet } from 'react-native';

import { Theme } from 'app/styles/theme';

export const defaultStyle = ({ colors }: Theme) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors.tertiary,
      borderRadius: 10,
      padding: 15,
      alignItems: 'center',
      gap: 5
    },
    icon: {
      width: 34,
      height: 34
    }
  });
};

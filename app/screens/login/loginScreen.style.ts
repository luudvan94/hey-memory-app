import { StyleSheet } from 'react-native';

import { Theme } from 'app/styles/theme';

export const defaultStyles = ({ colors, scalingNumber }: Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 50 * scalingNumber
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    options: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      gap: 10 * scalingNumber
    }
  });
};

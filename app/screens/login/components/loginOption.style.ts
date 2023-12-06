import { StyleSheet } from 'react-native';

import { Theme } from 'app/styles/theme';

export const defaultStyle = ({ colors, scalingNumber }: Theme) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors.tertiary,
      borderRadius: 10,
      padding: 15 * scalingNumber,
      alignItems: 'center',
      gap: 5
    },
    icon: {
      width: 34 * scalingNumber,
      height: 34 * scalingNumber
    }
  });
};

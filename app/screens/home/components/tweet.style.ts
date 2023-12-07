import { StyleSheet } from 'react-native';

import { Theme } from 'app/styles/theme';

export const defaultStyle = ({ colors, scalingNumber }: Theme) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      width: '100%',
      gap: 10 * scalingNumber,
      paddingVertical: 15 * scalingNumber
    },
    content: {
      flex: 1,
      display: 'flex',
      gap: 20 * scalingNumber,
      paddingRight: 10 * scalingNumber
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    dateTime: {
      display: 'flex',
      flexDirection: 'row',
      gap: 20 * scalingNumber
    },
    action: {
      backgroundColor: 'red'
    },
    border: {
      width: '100%',
      height: 1,
      backgroundColor: colors.tertiary
    }
  });
};

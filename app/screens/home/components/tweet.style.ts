import { StyleSheet } from 'react-native';

import { Theme } from 'app/styles/theme';

export const defaultStyle = ({ colors, scalingNumber }: Theme) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      width: '100%',
      gap: 25 * scalingNumber,
      paddingTop: 12 * scalingNumber,
      paddingBottom: 5 * scalingNumber,
      paddingLeft: 20 * scalingNumber
    },
    content: {
      flex: 1,
      display: 'flex',
      gap: 20 * scalingNumber,
      paddingRight: 10 * scalingNumber
    },
    actions: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 10 * scalingNumber,
      marginBottom: 5 * scalingNumber
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    dateTime: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
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

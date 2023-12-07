import { StyleSheet } from 'react-native';

import { Theme } from 'app/styles/theme';

export const defaultStyle = ({ colors, scalingNumber }: Theme) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      width: '100%',
      height: 50 * scalingNumber,
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      borderBottomWidth: 1,
      borderRadius: 25,
      borderColor: colors.primary
    }
  });
};

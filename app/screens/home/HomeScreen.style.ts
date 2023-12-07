import { StyleSheet } from 'react-native';

import { Theme } from 'app/styles/theme';

export const defaultStyle = ({ scalingNumber }: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#fff'
    },

    eventsList: {
      width: '100%',
      height: '100%',
      paddingLeft: 10 * scalingNumber
    }
  });
};

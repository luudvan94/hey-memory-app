import { StyleSheet } from 'react-native';

import { textStyle } from 'app/components';
import { Theme } from 'app/styles/theme';

export const defaultStyle = (theme: Theme) => {
  const inputTextStyle = textStyle.body(theme);
  return StyleSheet.create({
    container: {
      flex: 1,
      margin: 10 * theme.scalingNumber,
      justifyContent: 'space-between'
    },
    textInput: {
      ...inputTextStyle
    },
    postButton: {
      // marginTop: 400 * theme.scalingNumber,
      paddingHorizontal: 20 * theme.scalingNumber,
      paddingVertical: 10 * theme.scalingNumber,
      backgroundColor: theme.colors.primary,
      borderRadius: 20 * theme.scalingNumber,
      alignSelf: 'flex-end'
    },
    post: {
      color: theme.colors.background
    }
  });
};

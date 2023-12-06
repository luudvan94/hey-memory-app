import {
  Text as ReactText,
  StyleProp,
  StyleSheet,
  TextStyle
} from 'react-native';

import { Theme, useThemeProvider } from 'app/styles/theme';

const textStyle = {
  largeTitle: ({ scalingNumber }: Theme) => ({
    fontSize: 34 * scalingNumber
  }),
  title1: ({ scalingNumber }: Theme) => ({
    fontSize: 28 * scalingNumber
  }),
  title2: ({ scalingNumber }: Theme) => ({
    fontSize: 22 * scalingNumber
  }),
  title3: ({ scalingNumber }: Theme) => ({
    fontSize: 20 * scalingNumber
  }),
  headline: ({ scalingNumber }: Theme) => ({
    fontSize: 17 * scalingNumber,
    fontweight: '600'
  }),
  body: ({ scalingNumber }: Theme) => ({
    fontSize: 16 * scalingNumber
  }),
  callout: ({ scalingNumber }: Theme) => ({
    fontSize: 15 * scalingNumber
  }),
  secondary: ({ colors }: Theme) => ({
    color: colors.secondary
  })
};

type TextProps = {
  // eslint-disable-next-line no-unused-vars
  [K in keyof typeof textStyle]?: true | undefined;
} & {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const Text: React.FC<TextProps> = (props) => {
  const { children, style, ...styleKeys } = props;
  const theme = useThemeProvider();

  const stylesToApply = Object.keys(styleKeys)
    .filter((key) => styleKeys[key as keyof typeof styleKeys])
    .map((key) => textStyle[key as keyof typeof textStyle](theme));

  const mergedStyles = StyleSheet.flatten([
    ...stylesToApply,
    { fontFamily: 'Inter-Black' },
    style
  ]);

  return <ReactText style={mergedStyles}>{children}</ReactText>;
};

export { Text };

import { Colors, Theme, useTheme } from '@rneui/themed';
import {
  Text as ReactText,
  StyleProp,
  StyleSheet,
  TextStyle
} from 'react-native';

type TextStyleFunction = (theme: ColorWithTheme) => TextStyle;
type ColorWithTheme = { colors: Colors } & Theme;
export const textStyle: Record<string, TextStyleFunction> = {
  largeTitle: ({ spacing }: ColorWithTheme) => ({
    fontSize: 34
  }),
  title1: ({ spacing }: ColorWithTheme) => ({
    fontSize: 28
  }),
  title2: ({ spacing }: ColorWithTheme) => ({
    fontSize: 22
  }),
  title3: ({ spacing }: ColorWithTheme) => ({
    fontSize: 20
  }),
  headline: ({ spacing }: ColorWithTheme) => ({
    fontSize: 17
  }),
  body: ({ spacing }: ColorWithTheme) => ({
    fontSize: 16
  }),
  callout: ({ spacing }: ColorWithTheme) => ({
    fontSize: 14
  }),
  secondary: ({ colors }: ColorWithTheme) => ({
    color: colors.grey1
  }),
  bold: (theme: ColorWithTheme) => ({
    fontWeight: 'bold'
  })
};

type TextProps = {
  // children: string;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
} & {
  // eslint-disable-next-line no-unused-vars
  [K in keyof typeof textStyle]?: true | undefined | string;
};

const Text: React.FC<TextProps> = (props) => {
  const { children, style, ...styleKeys } = props;
  const { theme } = useTheme();

  const stylesToApply = Object.keys(styleKeys)
    .filter((key) => styleKeys[key as keyof typeof styleKeys])
    .map((key) => textStyle[key as keyof typeof textStyle](theme));

  const mergedStyles = StyleSheet.flatten([
    { fontFamily: 'Inter-Black' },
    ...stylesToApply,
    style
  ]);

  return <ReactText style={mergedStyles}>{children}</ReactText>;
};

export { Text };

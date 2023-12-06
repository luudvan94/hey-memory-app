import { ColorSchemeName } from 'react-native';

import { black, darkGrey, lightGrey, superLightGrey } from 'app/utils/colors';

type Theme = {
  colors: {
    background: string;
    primary?: string;
    secondary?: string;
    // 3rd level
    tertiary?: string;
  };
  scalingNumber: number;
};

const colorSchemeThemes: Record<
  Exclude<ColorSchemeName, null | undefined>,
  Theme
> = {
  light: {
    colors: {
      background: lightGrey,
      primary: black,
      secondary: darkGrey,
      tertiary: superLightGrey
    },
    scalingNumber: 1
  },
  dark: {
    colors: {
      background: black
    },
    scalingNumber: 1
  }
};
export { Theme, colorSchemeThemes };

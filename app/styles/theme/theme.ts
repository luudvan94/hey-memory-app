import { ColorSchemeName } from 'react-native';

import {
  black,
  darkGrey,
  lightGrey,
  superLightGrey,
  superSuperLightGrey
} from 'app/utils/colors';

type Theme = {
  colors: {
    background: string;
    primary?: string;
    secondary?: string;
    // 3rd level
    tertiary?: string;
    // 4th level
    quaternary?: string;
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
      tertiary: superLightGrey,
      quaternary: superSuperLightGrey
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

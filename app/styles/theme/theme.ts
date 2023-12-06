import { ColorSchemeName } from 'react-native';

type Theme = {
  primaryColor: string;
  secondaryColor: string;
};

const colorSchemeThemes: Record<
  Exclude<ColorSchemeName, null | undefined>,
  Theme
> = {
  light: {
    primaryColor: 'white',
    secondaryColor: 'green'
  },
  dark: {
    primaryColor: 'red',
    secondaryColor: 'yellow'
  }
};
export { Theme, colorSchemeThemes };

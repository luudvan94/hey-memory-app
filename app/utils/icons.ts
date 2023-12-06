export const ICONS = {
  GOOGLE: require('../../assets/images/google.svg'),
  APPLE: require('../../assets/images/apple.svg'),
  USERNAME_PASSWORD: require('../../assets/images/username.svg')
};

export type Icon = (typeof ICONS)[keyof typeof ICONS];

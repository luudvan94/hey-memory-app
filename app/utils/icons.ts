export const Icons = {
  GOOGLE: '../../assets/images/google.svg',
  APPLE: '../../assets/images/apple.svg',
  USERNAME_PASSWORD: '../../assets/images/username.svg'
};

export type Icon = (typeof Icons)[keyof typeof Icons];

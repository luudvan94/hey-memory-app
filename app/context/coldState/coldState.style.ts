import { defaultStyle as loginOptionStyle } from 'app/screens/login/components/loginOption.style';
import { defaultStyles as loginScreenStyle } from 'app/screens/login/loginScreen.style';
import { Theme } from 'app/styles/theme';

export const defaultStyles = (theme: Theme) => {
  return {
    loginScreenStyle: loginScreenStyle(theme),
    loginOptionStyle: loginOptionStyle(theme)
  };
};

export type ColdStateStyles = ReturnType<typeof defaultStyles>;

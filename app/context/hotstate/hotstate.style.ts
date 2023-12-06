import { defaultStyle as homeScreenStyle } from 'app/screens/home/homeScreen.style';
import { defaultStyle as searchScreenStyle } from 'app/screens/search/searchScreen.style';
import { Theme } from 'app/styles/theme';

export const defaultStyles = (theme: Theme) => {
  return {
    homeScreenStyle: homeScreenStyle(theme),
    searchScreenStyle: searchScreenStyle(theme)
  };
};

export type HotStateStyles = ReturnType<typeof defaultStyles>;

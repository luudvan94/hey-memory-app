import { defaultStyle as homeHeaderStyle } from 'app/screens/home/components/header.style';
import { defaultStyle as tweetStyle } from 'app/screens/home/components/tweet.style';
import { defaultStyle as homeScreenStyle } from 'app/screens/home/homeScreen.style';
import { defaultStyle as loveScreenStyle } from 'app/screens/love/loveScreen.style';
import { defaultStyle as recentSearchStyle } from 'app/screens/search/components/recentSearch.style';
import { defaultStyle as searchScreenStyle } from 'app/screens/search/searchScreen.style';
import { defaultStyle as tweetHeaderStyle } from 'app/screens/tweet/header/tweetHeader.style';
import { defaultStyle as tweetScreenStyle } from 'app/screens/tweet/tweetScreen.style';
import { defaultStyle as userScreenStyle } from 'app/screens/user/userScreen.style';
import { Theme } from 'app/styles/theme';

export const defaultStyles = (theme: Theme) => {
  return {
    homeScreenStyle: homeScreenStyle(theme),
    searchScreenStyle: searchScreenStyle(theme),
    userScreenStyle: userScreenStyle(theme),
    tweetScreenStyle: tweetScreenStyle(theme),
    tweetStyle: tweetStyle(theme),
    homeHeaderStyle: homeHeaderStyle(theme),
    loveScreenStyle: loveScreenStyle(theme),
    tweetHeaderStyle: tweetHeaderStyle(theme),
    recentSearchStyle: recentSearchStyle(theme)
  };
};

export type HotStateStyles = ReturnType<typeof defaultStyles>;

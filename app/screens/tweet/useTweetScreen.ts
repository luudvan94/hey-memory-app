import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useAsyncResource } from 'use-async-resource';

import { useHotStateContext } from 'app/context/hotState/hotState.context';
import { TweetStackParamList } from 'app/context/hotState/hotState.navigator';
import { Asset } from 'app/models/asset';
import { Screens } from 'app/utils/screens.const';

const useTweetScreen = () => {
  const routeProps =
    useRoute<RouteProp<TweetStackParamList, Screens.TWEET_MODAL>>();

  const { tweetService } = useHotStateContext();
  const [text, setText] = React.useState<string>('');
  const [, postTweet] = useAsyncResource(tweetService.postTweet);
  const [selectedAssets, setSelectedAssets] = React.useState<Asset[]>([]);

  const onAssetSelected = React.useCallback((assets: Asset) => {
    setSelectedAssets([assets]);
  }, []);
  const navigation = useNavigation();

  const onPostPress = useCallback(() => {
    postTweet({
      content: text,
      parentTweetId: routeProps?.params.parentTweet?.id || null,
      childCount: 0,
      photoUrl: selectedAssets[0]?.uri || null,
      thumbnail: selectedAssets[0]?.uri || null
    });
    navigation.goBack();
  }, [
    postTweet,
    text,
    routeProps?.params.parentTweet?.id,
    selectedAssets,
    navigation
  ]);

  return {
    text,
    setText,
    onAssetSelected,
    selectedAssets,
    onPostPress,
    parentTweet: routeProps?.params.parentTweet
  };
};

export { useTweetScreen };

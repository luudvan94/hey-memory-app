import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { resourceCache, useAsyncResource } from 'use-async-resource';

import { useHotStateContext } from 'app/context/hotState/hotState.context';
import { Asset } from 'app/models/asset';

const useTweetScreen = () => {
  const { tweetService } = useHotStateContext();
  const [text, setText] = React.useState<string>('');
  const [, postTweet] = useAsyncResource(tweetService.postTweet);
  const [selectedAssets, setSelectedAssets] = React.useState<Asset[]>([]);

  const onAssetSelected = React.useCallback((assets: Asset) => {
    setSelectedAssets((prev) => [...prev, assets]);
  }, []);
  const navigation = useNavigation();

  const onPostPress = useCallback(() => {
    postTweet(text);
    resourceCache(tweetService.getTweets).clear();
    navigation.goBack();
  }, [postTweet, text, tweetService.getTweets, navigation]);

  return { text, setText, onAssetSelected, selectedAssets, onPostPress };
};

export { useTweetScreen };

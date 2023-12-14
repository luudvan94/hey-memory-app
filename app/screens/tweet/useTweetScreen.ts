import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useAsyncResource } from 'use-async-resource';

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
    navigation.goBack();
  }, [postTweet, text, navigation]);

  return { text, setText, onAssetSelected, selectedAssets, onPostPress };
};

export { useTweetScreen };

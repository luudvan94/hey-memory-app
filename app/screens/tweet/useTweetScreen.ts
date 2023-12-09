import React from 'react';

import { Asset } from 'app/models/asset';

const useTweetScreen = () => {
  const [text, setText] = React.useState<string | undefined>(undefined);
  const [selectedAssets, setSelectedAssets] = React.useState<Asset[]>([]);

  const onAssetSelected = React.useCallback((assets: Asset) => {
    setSelectedAssets((prev) => [...prev, assets]);
  }, []);
  return { text, setText, onAssetSelected, selectedAssets };
};

export { useTweetScreen };

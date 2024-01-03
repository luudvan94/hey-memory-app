import { Response } from '@bam.tech/react-native-image-resizer';
import { useEffect, useState } from 'react';

import { Asset } from 'app/models/asset';
import { resizeImage } from 'app/utils/resizeImage';

export const useAssetContainer = (assets: Asset[]) => {
  const [resizeAsset, setResizeAsset] = useState<Response | undefined>();

  useEffect(() => {
    const resize = async () => {
      if (assets.length === 1) {
        const resized = await resizeImage(assets[0]);
        setResizeAsset(resized);
      }
    };

    resize();
  }, [assets]);

  return { resizeAsset };
};

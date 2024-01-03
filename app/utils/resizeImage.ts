import ImageResizer, { Response } from '@bam.tech/react-native-image-resizer';

import { Asset } from 'app/models/asset';

export const resizeImage = async (
  asset: Asset,
  options: { maxWidth: number; maxHeight: number } = {
    maxWidth: 300,
    maxHeight: 300
  }
): Promise<Response> => {
  return ImageResizer.createResizedImage(
    asset.uri,
    options.maxWidth,
    options.maxHeight,
    'JPEG',
    100,
    0,
    undefined,
    false,
    {
      mode: 'contain',
      onlyScaleDown: false
    }
  );
};

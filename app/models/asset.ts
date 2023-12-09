import * as ImagePicker from 'expo-image-picker';

export type Asset = ImagePicker.ImagePickerAsset;

export function calculateNewSize(
  photo: ImagePicker.ImagePickerAsset,
  maxHeight: number
) {
  const aspectRatio = photo.width / photo.height;
  const newHeight = maxHeight;
  const newWidth = newHeight * aspectRatio;
  return { width: newWidth, height: newHeight };
}

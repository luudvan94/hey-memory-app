import { useHeaderHeight } from '@react-navigation/elements';
import { Button, useTheme } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import React, { useCallback } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { useHotStateContext } from 'app/context/hotState/hotState.context';
import { Asset } from 'app/models/asset';

import useStyles from './footer.style';

interface FooterProps {
  shouldDisablePostButton: boolean;
  onPostPress: () => void;
  onAssetSelected: (asset: Asset) => void;
}
export const Footer: React.FC<FooterProps> = ({
  shouldDisablePostButton,
  onPostPress,
  onAssetSelected
}) => {
  const height = useHeaderHeight();
  const styles = useStyles();
  const { theme } = useTheme();

  const {
    content: { tweet: content }
  } = useHotStateContext();

  const pickImage = useCallback(async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled) {
      const asset = result.assets[0];
      onAssetSelected({
        uri: asset.uri,
        width: asset.width,
        height: asset.height
      });
    }
  }, [onAssetSelected]);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height + 60}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      <View style={styles.footer}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            buttonStyle={styles.buttonStyle}
            onPress={pickImage}
            icon={{
              name: 'image',
              type: 'ionicons',
              size: 20,
              color: theme.colors.grey2
            }}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            icon={{
              name: 'camera',
              type: 'ionicons',
              size: 20,
              color: theme.colors.grey2
            }}
          />
        </View>
        <Button
          onPress={onPostPress}
          disabled={shouldDisablePostButton}
          title={content.post}
          buttonStyle={styles.postButton}
          titleStyle={styles.post}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

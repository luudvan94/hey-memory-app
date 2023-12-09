import { useHeaderHeight } from '@react-navigation/elements';
import { Button } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { useHotStateContext } from 'app/context/hotState/hotState.context';
import { Asset } from 'app/models/asset';

import useStyles from './footer.style';

interface FooterProps {
  onAssetSelected: (assets: Asset) => void;
}
export const Footer: React.FC<FooterProps> = ({ onAssetSelected }) => {
  const height = useHeaderHeight();
  const styles = useStyles();

  const {
    content: { tweet: content }
  } = useHotStateContext();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.canceled) {
      result.assets.forEach((asset) => {
        onAssetSelected(asset);
      });
    }
  };
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height + 60}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      <View style={styles.footer}>
        <View style={styles.tools}>
          <Button
            icon={{
              name: 'image',
              type: 'ionicons',
              size: 25,
              color: 'grey'
            }}
            buttonStyle={styles.buttonStyle}
          />
          <Button
            onPress={pickImage}
            icon={{
              name: 'camera',
              type: 'font-awesome',
              size: 23,
              color: 'grey'
            }}
            buttonStyle={styles.buttonStyle}
          />
        </View>
        <Button
          title={content.post}
          buttonStyle={styles.postButton}
          titleStyle={styles.post}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

import { useHeaderHeight } from '@react-navigation/elements';
import { Button } from '@rneui/themed';
import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { useHotStateContext } from 'app/context/hotState/hotState.context';

import useStyles from './footer.style';

interface FooterProps {
  shouldDisablePostButton: boolean;
  onPostPress: () => void;
}
export const Footer: React.FC<FooterProps> = ({
  shouldDisablePostButton,
  onPostPress
}) => {
  const height = useHeaderHeight();
  const styles = useStyles();

  const {
    content: { tweet: content }
  } = useHotStateContext();
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height + 60}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      <View style={styles.footer}>
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

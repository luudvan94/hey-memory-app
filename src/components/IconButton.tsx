import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

type IconButtonProps = {
  onPress: () => void;
  iconSource: keyof typeof FontAwesome.glyphMap;
};

const IconButton: React.FC<IconButtonProps> = ({ onPress, iconSource }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <FontAwesome name={iconSource} size={24} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10
  }
});

export default IconButton;

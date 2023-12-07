import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

import { Button } from './Button';

type IconButtonProps = {
  onPress: () => void;
  iconSource: keyof typeof FontAwesome.glyphMap;
};

const IconButton: React.FC<IconButtonProps> = ({ onPress, iconSource }) => {
  return (
    <Button onPress={onPress}>
      <FontAwesome name={iconSource} size={24} color="black" />
    </Button>
  );
};

export { IconButton };

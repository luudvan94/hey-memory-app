import { Pressable, Text } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;

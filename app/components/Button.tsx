import { Pressable, StyleSheet } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  overrideStyles?: object;
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  overrideStyles
}) => {
  return (
    <Pressable
      style={{ ...styles.button, ...overrideStyles }}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10
  }
});

export { Button };

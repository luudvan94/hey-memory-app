import { Image } from 'expo-image';
import { Pressable, View } from 'react-native';

import { Text } from 'app/components';
import { LoginContent } from 'app/context/coldState/coldState.content';
import { useColdStateContext } from 'app/context/coldState/coldState.context';
import { Icon } from 'app/utils/icons';

interface LoginOptionProps {
  icon: Icon;
  label: LoginContent;
  onPress: () => void;
}

const LoginOption: React.FC<LoginOptionProps> = ({ icon, label, onPress }) => {
  const {
    styles: { loginOptionStyle: styles }
  } = useColdStateContext();

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} />
        <Text body>{label}</Text>
      </View>
    </Pressable>
  );
};

export default LoginOption;

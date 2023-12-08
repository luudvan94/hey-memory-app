import { Button, useTheme } from '@rneui/themed';
import { View } from 'react-native';

import useStyles from './header.style';

const Header: React.FC = () => {
  const styles = useStyles();
  const {
    theme: { colors }
  } = useTheme();
  return (
    <View style={styles.container}>
      <Button
        buttonStyle={styles.buttonStyle}
        icon={{
          name: 'arrow-left',
          size: 30,
          type: 'ionicons',
          color: colors.black
        }}
      />
      <Button
        title={'8 Dec, 2023'}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.time}
      />
      <Button
        buttonStyle={styles.buttonStyle}
        icon={{
          name: 'arrow-right',
          size: 30,
          type: 'ionicons',
          color: colors.black
        }}
      />
    </View>
  );
};

export default Header;

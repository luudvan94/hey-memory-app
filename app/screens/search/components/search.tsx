import { Button } from '@rneui/base';
import { Divider, useTheme } from '@rneui/themed';
import { View } from 'react-native';

import { Text } from 'app/components';

import useStyles from './search.style';

export const Search = () => {
  const styles = useStyles();
  const {
    theme: { colors }
  } = useTheme();

  return (
    <View style={styles.container}>
      <Button
        icon={{
          name: 'search',
          type: 'ionicons',
          size: 25,
          color: colors.grey3
        }}
        buttonStyle={styles.buttonStyle}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.content}>
          <Text callout>test search recent</Text>
          <Button
            icon={{
              name: 'close',
              type: 'ionicons',
              size: 15,
              color: colors.grey3
            }}
            buttonStyle={styles.buttonStyle}
          />
        </View>

        <Divider />
      </View>
    </View>
  );
};

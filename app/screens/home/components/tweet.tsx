import { Tweet as TweetModel } from '@luudvan94/hey-memory-shared-models';
import { Divider } from '@rneui/base';
import { Button, useTheme } from '@rneui/themed';
import { View } from 'react-native';

import { Text, TweetContent } from 'app/components';

import useStyles from './tweet.style';
interface TweetProps {
  tweet: TweetModel;
  openDeleteDialog: () => void;
  onPress: () => void;
  pressable?: false | undefined;
}

const Tweet: React.FC<TweetProps> = ({
  openDeleteDialog,
  onPress,
  pressable = true,
  tweet
}) => {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View>
      <Button
        disabled={!pressable}
        disabledStyle={{ backgroundColor: 'transparent' }}
        buttonStyle={styles.button}
        onPress={() => {
          if (pressable) onPress();
        }}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <TweetContent content={tweet.content} />

            <View style={styles.footer}>
              <Text callout secondary>
                {tweet.createdAt.toDateString()}
              </Text>
              <View style={styles.dateTime}>
                <Text callout secondary>
                  {tweet.createdAt.toLocaleTimeString()}
                </Text>
                <Button
                  buttonStyle={{
                    padding: 0,
                    paddingHorizontal: 0,
                    ...styles.button
                  }}
                  onPress={openDeleteDialog}
                  icon={{
                    name: 'close',
                    type: 'ionicons',
                    size: 18,
                    color: theme.colors.grey2
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Button>
      <Divider color={theme.colors.grey4} style={styles.border} />
    </View>
  );
};

export { Tweet };

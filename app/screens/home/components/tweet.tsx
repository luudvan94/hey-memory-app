import { Tweet as TweetModel } from '@luudvan94/hey-memory-shared-models';
import { Divider } from '@rneui/base';
import { Button, useTheme } from '@rneui/themed';
import { View } from 'react-native';

import { Text, TweetContent } from 'app/components';

import useStyles from './tweet.style';
interface TweetProps {
  tweet: TweetModel;
  openDeleteDialog?: () => void;
  onPress?: (tweet: TweetModel) => void;
  pressable: boolean;
  onChatBubblePress?: () => void;
}

const Tweet: React.FC<TweetProps> = ({
  openDeleteDialog,
  onPress,
  pressable = true,
  tweet,
  onChatBubblePress
}) => {
  const styles = useStyles();
  const { theme } = useTheme();
  const iconColor = theme.colors.grey3;
  return (
    <View>
      <Button
        disabled={!pressable}
        disabledStyle={{ backgroundColor: 'transparent' }}
        buttonStyle={styles.button}
        onPress={() => {
          if (pressable && onPress) onPress(tweet);
        }}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.contentContainer}>
              {tweet.childCount > 0 ? <Divider style={styles.divider} /> : null}
              <TweetContent
                containerStyle={{ flex: 1 }}
                content={tweet.content}
              />
            </View>
            <View>
              {tweet.childCount > 0 ? (
                <Text secondary>{`${tweet.childCount} more events`}</Text>
              ) : null}
              <View style={styles.footer}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Text callout secondary>
                    {tweet.createdAt.toDateString()}
                  </Text>
                  <Button
                    onPress={onChatBubblePress}
                    buttonStyle={styles.button}
                    titleStyle={{ margin: 0, padding: 0 }}
                    icon={{
                      name: 'chatbubbles-outline',
                      type: 'ionicon',
                      size: 20,
                      color: iconColor
                    }}
                  />
                </View>

                <View style={styles.dateTime}>
                  <Text callout secondary>
                    {tweet.createdAt.toLocaleTimeString()}
                  </Text>
                  <Button
                    buttonStyle={styles.button}
                    onPress={openDeleteDialog}
                    icon={{
                      name: 'close',
                      type: 'ionicons',
                      size: 20,
                      color: iconColor
                    }}
                  />
                </View>
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

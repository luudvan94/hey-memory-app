import { makeStyles } from '@rneui/themed';
import { Image } from 'expo-image';
import { StyleProp, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Asset, calculateNewSize } from 'app/models/asset';

interface AssetContainerProps {
  containerStyle?: StyleProp<ViewStyle>;
  assets: Asset[];
  onLayout?: (width: number, height: number) => void;
}
export const AssetContainer: React.FC<AssetContainerProps> = ({
  assets,
  containerStyle,
  onLayout
}) => {
  const styles = useStyles();
  return (
    <ScrollView
      onLayout={(layout) => {
        const { width, height } = layout.nativeEvent.layout;
        onLayout && onLayout(width, height);
      }}
      horizontal={true}
      style={[containerStyle]}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {assets.map((asset) => {
        const { width, height } = calculateNewSize(asset, 200);
        return (
          <Image source={asset.uri} style={[styles.asset, { width, height }]} />
        );
      })}
    </ScrollView>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing.xs
  },
  asset: {
    borderRadius: 10
  }
}));

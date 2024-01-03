import { makeStyles } from '@rneui/themed';
import { Image } from 'expo-image';
import { StyleProp, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import withSuspenseAndErrorBoundary from 'app/hoc/withSuspenseAndErrorBoundary';
import { Asset } from 'app/models/asset';

import { useAssetContainer } from './useAssetContainer';
interface AssetContainerProps {
  containerStyle?: StyleProp<ViewStyle>;
  assets: Asset[];
  onLayout?: (width: number, height: number) => void;
}

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const AssetContainer: React.FC<AssetContainerProps> =
  withSuspenseAndErrorBoundary(
    ({ assets, containerStyle, onLayout }: AssetContainerProps) => {
      const styles = useStyles();
      const { resizeAsset } = useAssetContainer(assets);
      return (
        <ScrollView
          onLayout={(layout) => {
            const { width, height } = layout.nativeEvent.layout;
            onLayout?.(width, height);
          }}
          horizontal={true}
          style={[containerStyle]}
          contentContainerStyle={styles.container}
          showsHorizontalScrollIndicator={false}
        >
          {assets.map((asset) => {
            return (
              <Image
                placeholder={blurhash}
                contentFit="contain"
                key={asset.uri}
                source={resizeAsset?.uri ?? asset.uri}
                style={[
                  styles.asset,
                  { width: resizeAsset?.width, height: resizeAsset?.height }
                ]}
              />
            );
          })}
        </ScrollView>
      );
    }
  );

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

import { SafeAreaView } from 'react-native-safe-area-context';

import { Tweet } from '../home/components/tweet';

const TweetScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Tweet />
    </SafeAreaView>
  );
};

export default TweetScreen;

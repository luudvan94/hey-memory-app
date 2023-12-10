import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@rneui/themed';
import { View } from 'react-native';

import HomeScreen from 'app/screens/home/homeScreen';
import SearchScreen from 'app/screens/search/searchScreen';
import SearchResultScreen from 'app/screens/searchResult/searchResultScreen';
import TweetScreen from 'app/screens/tweet/tweetScreen';
import TweetDetailScreen from 'app/screens/tweetDetail/tweetDetailScreen';
import { UserScreen } from 'app/screens/user/userScreen';
import { Screens } from 'app/utils/screens.const';

import { useHotStateContext } from './hotState.context';

const Tab = createBottomTabNavigator();
const Root = createStackNavigator();

const AppTabs = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0
        },
        tabBarActiveTintColor: theme.colors.grey0,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case Screens.HOME:
              return (
                <Ionicons
                  name={`home${!focused ? '-outline' : ''}`}
                  size={size}
                  color={color}
                />
              );
            case Screens.SEARCH:
              return (
                <Ionicons
                  name={`search${!focused ? '-outline' : ''}`}
                  size={size}
                  color={color}
                />
              );
            case Screens.TWEET:
              return (
                <Ionicons
                  name={`add-circle${!focused ? '-outline' : ''}`}
                  size={size}
                  color={color}
                />
              );
            case Screens.USER:
              return (
                <Ionicons
                  name={`person${!focused ? '-outline' : ''}`}
                  size={size}
                  color={color}
                />
              );
            default:
              return null;
          }
        }
      })}
    >
      <Tab.Screen name={Screens.HOME} component={HomeScreen} />
      <Tab.Screen name={Screens.SEARCH} component={SearchScreen} />
      <Tab.Screen
        name={Screens.TWEET}
        component={TweetScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate(Screens.TWEET + '-MODAL');
          }
        })}
      />
      <Tab.Screen name={Screens.USER} component={UserScreen} />
    </Tab.Navigator>
  );
};

const AppStack = createStackNavigator();
const AppNavigator = () => {
  const { content } = useHotStateContext();
  return (
    <AppStack.Navigator
      initialRouteName={Screens.TAB}
      screenOptions={{ headerShown: true, headerBackTitle: content.back }}
    >
      <AppStack.Screen
        name={Screens.SEARCH_RESULT}
        component={SearchResultScreen}
      />
      <AppStack.Screen
        name={Screens.TWEET_DETAIL}
        component={TweetDetailScreen}
      />
      <AppStack.Screen
        name={Screens.TAB}
        component={AppTabs}
        options={{
          headerShown: false
        }}
      />
    </AppStack.Navigator>
  );
};

function HotStateNavigator() {
  const { content } = useHotStateContext();
  return (
    <Root.Navigator
      initialRouteName={Screens.STACK}
      screenOptions={{ headerShown: false }}
    >
      <Root.Group>
        <Root.Screen
          name={Screens.STACK}
          component={AppNavigator}
        ></Root.Screen>
      </Root.Group>
      <Root.Group screenOptions={{ presentation: 'modal' }}>
        <Root.Screen
          name={Screens.TWEET + '-MODAL'}
          component={TweetScreen}
          options={{
            headerShown: true,
            headerTitle: '',
            headerBackTitle: content.tweet.cancel,
            headerBackImage: () => <View style={{ width: 10 }} />
            // header: () => <TweetHeader />
          }}
        ></Root.Screen>
      </Root.Group>
    </Root.Navigator>
  );
}

export type TweetStackParamList = {
  [Screens.STACK]: undefined;
  [Screens.SEARCH_RESULT]: undefined;
  [Screens.TWEET_DETAIL]: undefined;
};

export default HotStateNavigator;

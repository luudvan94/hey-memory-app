import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from 'app/screens/home/homeScreen';
import SearchScreen from 'app/screens/search/searchScreen';
import TweetScreen from 'app/screens/tweet/tweetScreen';
import { UserScreen } from 'app/screens/user/userScreen';
import { Screens } from 'app/utils/screens.const';

const Tab = createBottomTabNavigator();

function HotStateNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case Screens.HOME:
              return (
                <Ionicons
                  name={`home${!focused ? '-outline' : ''}`}
                  size={size}
                />
              );
            case Screens.SEARCH:
              return (
                <Ionicons
                  name={`search${!focused ? '-outline' : ''}`}
                  size={size}
                />
              );
            case Screens.TWEET:
              return (
                <Ionicons
                  name={`add${!focused ? '-outline' : ''}`}
                  size={size}
                />
              );
            case Screens.USER:
              return (
                <Ionicons
                  name={`person${!focused ? '-outline' : ''}`}
                  size={size}
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
      <Tab.Screen name={Screens.TWEET} component={TweetScreen} />
      <Tab.Screen name={Screens.USER} component={UserScreen} />
    </Tab.Navigator>
  );
}

export default HotStateNavigator;

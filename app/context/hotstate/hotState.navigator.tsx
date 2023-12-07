import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from 'app/screens/home/homeScreen';
import SearchScreen from 'app/screens/search/searchScreen';
import TweetScreen from 'app/screens/tweet/tweetScreen';
import { UserScreen } from 'app/screens/user/userScreen';
import { Screens } from 'app/utils/screens.const';

import { useThemeProvider } from '../theme/theme.context';

const Tab = createBottomTabNavigator();

function HotStateNavigator() {
  const theme = useThemeProvider();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0
        },
        tabBarActiveTintColor: theme.colors.primary,
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
      <Tab.Screen name={Screens.TWEET} component={TweetScreen} />
      <Tab.Screen name={Screens.USER} component={UserScreen} />
    </Tab.Navigator>
  );
}

export default HotStateNavigator;

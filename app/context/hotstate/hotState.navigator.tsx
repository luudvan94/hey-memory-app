import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@rneui/themed';

import HomeScreen from 'app/screens/home/homeScreen';
import LoveScreen from 'app/screens/love/loveScreen';
import SearchScreen from 'app/screens/search/searchScreen';
import TweetHeader from 'app/screens/tweet/header/tweetHeader';
import TweetScreen from 'app/screens/tweet/tweetScreen';
import { UserScreen } from 'app/screens/user/userScreen';
import { Screens } from 'app/utils/screens.const';

const Tab = createBottomTabNavigator();
const Root = createStackNavigator();

const AppTabs = () => {
  const { theme } = useTheme();

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
            case Screens.LOVE:
              return (
                <Ionicons
                  name={`bookmark${!focused ? '-outline' : ''}`}
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
      <Tab.Screen name={Screens.LOVE} component={LoveScreen} />
      <Tab.Screen name={Screens.USER} component={UserScreen} />
    </Tab.Navigator>
  );
};

function HotStateNavigator() {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Group>
        <Root.Screen name="Tab" component={AppTabs}></Root.Screen>
      </Root.Group>
      <Root.Group screenOptions={{ presentation: 'modal' }}>
        <Root.Screen
          name={Screens.TWEET + '-MODAL'}
          component={TweetScreen}
          options={{
            headerShown: true,
            header: () => <TweetHeader />
          }}
        ></Root.Screen>
      </Root.Group>
    </Root.Navigator>
  );
}

export default HotStateNavigator;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from 'app/screens/home/HomeScreen';
import SearchScreen from 'app/screens/search/SearchScreen';

const Tab = createBottomTabNavigator();

function HotStateNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HotStateNavigator;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from 'app/screens/home/homeScreen';
import SearchScreen from 'app/screens/search/searchScreen';
import { Screens } from 'app/utils/screens.const';

const Tab = createBottomTabNavigator();

function HotStateNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false
        }}
      >
        <Tab.Screen name={Screens.HOME} component={HomeScreen} />
        <Tab.Screen name={Screens.SEARCH} component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HotStateNavigator;

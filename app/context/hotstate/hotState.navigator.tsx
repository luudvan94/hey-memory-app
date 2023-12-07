import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from 'app/screens/home/homeScreen';
import SearchScreen from 'app/screens/search/searchScreen';
import { UserScreen } from 'app/screens/user/userScreen';
import { Screens } from 'app/utils/screens.const';

const Tab = createBottomTabNavigator();

function HotStateNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen name={Screens.HOME} component={HomeScreen} />
      <Tab.Screen name={Screens.SEARCH} component={SearchScreen} />
      <Tab.Screen name={Screens.USER} component={UserScreen} />
    </Tab.Navigator>
  );
}

export default HotStateNavigator;

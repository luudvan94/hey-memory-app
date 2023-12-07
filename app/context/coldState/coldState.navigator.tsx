import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from 'app/screens/login/loginScreen';
import { Screens } from 'app/utils/screens.const';

const Stack = createStackNavigator();

function ColdStateNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Screens.LOGIN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={Screens.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default ColdStateNavigator;

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScrLogin from './pages/ScrLogin';
import ScrHome from './pages/ScrHome';
import ScrDiscard from './pages/ScrDiscard'
import ScrWeightMap from './pages/ScrWeightMap'
import ScrMySchedules from './pages/ScrMySchedules'
import ScrMyDiscards from './pages/ScrMyDiscards'
import ScrSignIn from './pages/ScrSignIn'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="ScrHome">
        <Stack.Screen name="ScrLogin" component={ScrLogin} />
        <Stack.Screen name="ScrHome" component={ScrHome} />
        <Stack.Screen name="ScrDiscard" component={ScrDiscard} />
        <Stack.Screen name="ScrMyDiscards" component={ScrMyDiscards} />
        <Stack.Screen name="ScrMySchedules" component={ScrMySchedules} />
        <Stack.Screen name="ScrWeightMap" component={ScrWeightMap} />
        <Stack.Screen name="ScrSignIn" component={ScrSignIn} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

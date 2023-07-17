import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationComponent from './srs/Screens/Auth/RegistrationScreen';
import LoginScreen from './srs/Screens/Auth/LoginScreen';
import Home from './srs/Screens/Profile/Home';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationComponent} options={{ headerShown: false }} />
        <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
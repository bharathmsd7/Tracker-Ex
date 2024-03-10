import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import FontWrapper from "./FontWrapper";
import LoginScreen from "../screens/LoginScreen";

const WelcomeScreenWrapper = ({navigation}) => {
  return (
    <FontWrapper>
      <WelcomeScreen navigation={navigation}/>
    </FontWrapper>
  );
}

const LoginScreenWrapper = ({navigation}) => {
  return (
    <FontWrapper>
      <LoginScreen navigation={navigation} />
    </FontWrapper>
  );
};
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreenWrapper} />
        <Stack.Screen name="Login" component={LoginScreenWrapper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
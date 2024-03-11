import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import FontWrapper from "./FontWrapper";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import InsightScreen from "../screens/InsightScreen";

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

const HomeScreenWrapper = ({ navigation }) => {
  return (
    <FontWrapper>
      <HomeScreen navigation={navigation} />
    </FontWrapper>
  );
};
const InsightScreenWrapper = ({ navigation }) => {
  return (
    <FontWrapper>
      <InsightScreen navigation={navigation} />
    </FontWrapper>
  );
};
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreenWrapper} />
      <Tab.Screen name="Insight" component={InsightScreenWrapper} />
    </Tab.Navigator>
  );
}
const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Welcome" component={WelcomeScreenWrapper} />
      <Stack.Screen name="Login" component={LoginScreenWrapper} />
    </Stack.Navigator>
  );
}
const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
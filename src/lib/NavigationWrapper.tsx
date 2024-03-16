import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import FontWrapper from "./FontWrapper";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import InsightScreen from "../screens/InsightScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import { Home, PieChart, Plus} from "lucide-react-native";
import { H1 } from "../components/ui/typography";
import CategoryScreen from "../screens/CategoryScreen";

const WelcomeScreenWrapper = ({ navigation }) => {
  return (
    <FontWrapper>
      <WelcomeScreen navigation={navigation} />
    </FontWrapper>
  );
};
const CategoryScreenWrapper = ({ navigation }) => {
  return (
    <FontWrapper>
      <CategoryScreen navigation={navigation} />
    </FontWrapper>
  );
};
const LoginScreenWrapper = ({ navigation }) => {
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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: 60,
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenWrapper}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Home size={24} color={focused ? "black" : "#A3ACB9"} />
                <H1
                  style={{ color: focused ? "black" : "#A3ACB9", fontSize: 12 }}
                >
                  Home
                </H1>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="AddExpense"
        component={AddExpenseScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: -30,
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: "#171C1F",
                  elevation: 8
                }}
              >
                <Plus  size={24} color={"white"} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Insight"
        component={InsightScreenWrapper}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <PieChart size={24} color={focused ? "black" : "#A3ACB9"} />
                <H1
                  style={{ color: focused ? "black" : "#A3ACB9", fontSize: 12 }}
                >
                  Insights
                </H1>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Welcome" component={WelcomeScreenWrapper} />
      <Stack.Screen name="Login" component={LoginScreenWrapper} />
      <Stack.Screen name="Category" component={CategoryScreenWrapper} />
    </Stack.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;

import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { screenHeight, screenWidth } from "../lib/utils";
import { H1, Label, Medium, Small } from "../components/ui/typography";
import GoogleSignInButton from '../components/GoogleSignInButton';
import { Input } from '../components/ui/input';
import Button from '../components/Button';
import InputText from '../components/InputText';

const LoginScreen = ({navigation}) => {
  const [value, setValue] = React.useState("");
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.container}>
        <View className="items-center flex-row justify-center gap-2">
          <Image
            style={styles.logo}
            source={require("../../assets/images/expenselogo.png")}
          />
          <H1>TrackerX</H1>
        </View>
        <Image
          style={styles.welcomeImage}
          source={require("../../assets/images/login.png")}
        />

        <View>
          <InputText label='Email' keyboardType={"email-address"} placeholder='Enter email address' />
          <Button onPress={() => navigation.navigate("Tab")} label={"Login"} />

        </View>
        <View className="items-center justify-center flex-row">
          <View style={styles.divider} />
          <Small
            style={{ textAlign: "center", fontSize: 16, marginHorizontal: 8 }}
          >
            or
          </Small>
          <View style={styles.divider} />
        </View>
        <GoogleSignInButton />
      </View>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  divider: {
    width: "45%",
    height: 1.5,
    backgroundColor: "#CED0D5",
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 8,
    marginRight: 4,
  },
  welcomeImage: {
    width: screenWidth - 32,
    height: screenWidth / 1.5,
  },
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignContent: "center",
    height: screenHeight - 50,
    gap: 24,
  },
});
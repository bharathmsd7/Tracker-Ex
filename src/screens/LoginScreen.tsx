import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { screenHeight, screenWidth } from "../lib/utils";
import { Button } from "../components/ui/button";
import { H1, Label, Medium, Small } from "../components/ui/typography";
import GoogleSignInButton from '../components/GoogleSignInButton';
import { Input } from '../components/ui/input';

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
          <Label>Email Address</Label>
          <Input
            className="mb-4"
            placeholder="Enter Email here..."
            value={value}
            onChangeText={(e) => setValue(e)}
            aria-labelledbyledBy="inputLabel"
            aria-errormessage="inputError"
          />
          <Button onPress={() => navigation.navigate("Tab")}>
            <Text style={{ color: "white", fontFamily: "Poppins_600SemiBold" }}>
              Continue
            </Text>
          </Button>
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
import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { screenHeight, screenWidth } from "../lib/utils";
import { H1, Medium } from "../components/ui/typography";
import { Button } from "../components/ui/button";
const WelcomeScreen = ({navigation}) => {
  return (
    <>
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
          source={require("../../assets/images/welcome.png")}
        />
        <View className="items-center justify-center ">
          <Medium style={{textAlign: 'center'}}>Manage you Expenses and check where you are spending</Medium>
        </View>
        <Button onPress={() => navigation.navigate('Login')} ><Text style={{color:'white', fontFamily:'Poppins_600SemiBold'}}>Continue</Text></Button>
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
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
    marginHorizontal: 16,
    justifyContent: "center",
    alignContent: "center",
    height: screenHeight ,
    gap: 32
  },
});

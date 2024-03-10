import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { screenHeight, screenWidth } from "../lib/utils";
import { H1, H3, P, H4 } from "../components/ui/typography";
import { Button } from "../components/ui/button";
const Welcome = () => {
  return (
    <>
      <View style={styles.container}>
        <View className="items-center flex-row justify-center">
          <Image
            style={styles.logo}
            source={require("../../assets/icon.png")}
          />
          <H1>TrackerX</H1>
        </View>
        <Image
          style={styles.welcomeImage}
          source={require("../../assets/images/welcome.png")}
        />
        <View className="items-center justify-center">
          <H4 >Manage you Expenses and check where you are spending</H4>
        </View>
        <Button ><Text style={{color:'white', fontFamily:'Poppins_600SemiBold'}}>Continue</Text></Button>
      </View>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
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

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_300Light,
  Poppins_200ExtraLight,
  Poppins_100Thin,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/poppins";
const Welcome = () => {
  const [fontLoads] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_300Light,
    Poppins_200ExtraLight,
    Poppins_100Thin,
    Poppins_600SemiBold,
    Poppins_800ExtraBold,
  });
  if (!fontLoads) {
    return null;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Welcome</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    // fontWeight: 'bold'
  },
});

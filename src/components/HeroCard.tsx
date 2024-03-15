import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Label, H3 } from './ui/typography'
import { LinearGradient } from 'expo-linear-gradient'
const HeroCard = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#1F2029", "#000000", "#1F2029"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Label style={{ color: "#A3ACB9" }}>Spend so far</Label>
      <H3 style={{ marginTop: -2, color: "white" }}>{'\u20B9'}133,156.85</H3>
    </LinearGradient>
  );
}

export default HeroCard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 16,
        backgroundColor: "red",
        marginVertical: 16,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    }
})
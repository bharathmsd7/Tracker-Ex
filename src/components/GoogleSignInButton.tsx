import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Large } from './ui/typography'

const GoogleSignInButton = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.icon} source={require("../../assets/images/google.png")} />
        <Large style={{fontSize: 15}}>Sign in with Google</Large>
    </View>
  )
}

export default GoogleSignInButton

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F8FA",
    borderRadius: 50,
    padding: 8,
    flexDirection: 'row',
    gap: 16,

  },
  icon: {
    width: 24,
    height: 24,
  }
});
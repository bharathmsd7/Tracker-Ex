import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenHeight, screenWidth } from "../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const GITHUB_AVATAR_URI = "../../assets/images/rick.png";
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={{ marginVertical: 8 }}>
        <Avatar alt="Zach Nugent's Avatar">
          <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
          <AvatarFallback>
            <Text>ZN</Text>
          </AvatarFallback>
        </Avatar>
      </View>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F8FA",
    paddingHorizontal: 16,
    height: screenHeight - 50
  },
});
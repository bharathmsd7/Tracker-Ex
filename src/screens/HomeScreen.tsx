import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenHeight, screenWidth } from "../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Large, Medium, Small } from '../components/ui/typography';
import Badge from '../components/ui/badge';
const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const GITHUB_AVATAR_URI = 'https://github.com/mrzachnugent.png';
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      {/* Welcome message */}
      <View style={{ marginTop: 8, marginBottom: 16, flexDirection: "row" }}>
        <Avatar alt="Zach Nugent's Avatar">
          <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
          <AvatarFallback>
            <Text>ZN</Text>
          </AvatarFallback>
        </Avatar>

        <View className="ml-4">
          <Large style={{ fontSize: 18, marginBottom: -4 }}>
            Good morning, John
          </Large>
          <Medium style={{ fontSize: 12 }}>
            Track your expenses, start your day right
          </Medium>
        </View>
      </View>

      {/* bagdes */}
      <View style={{ flexDirection: "row" }}>
        <Badge active={true} text="Today" style={{ marginRight: 8 }} />
        <Badge active={false} text="This week" style={{ marginRight: 8 }} />
        <Badge active={false} text="This month" style={{ marginRight: 8 }} />
        <Badge active={false} text="Calendar" />
      </View>

      {/* Hero card */}

      {/* Expense List */}
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
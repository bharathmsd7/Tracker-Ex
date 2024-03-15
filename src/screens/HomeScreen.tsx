import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenHeight, screenWidth } from "../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Label, Large, Medium, Small } from '../components/ui/typography';
import Badge from '../components/ui/badge';
import HeroCard from '../components/HeroCard';
import ExpenseListCard from '../components/ExpenseListCard';
const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const GITHUB_AVATAR_URI =
      "https://avatars.pfptown.com/597/rick-and-morty-pfp-4852.png";
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      {/* Welcome message */}
      <View style={{ marginTop: 16, marginBottom: 22, flexDirection: "row" }}>
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
      <HeroCard />

      {/* Expense List */}
      <Label
        style={{
          color: "#6A7183",
          fontSize: 14,
          fontFamily: "Poppins_700Bold",
        }}
      >
        Today, 3 Oct
      </Label>
      <ExpenseListCard />
      <ExpenseListCard />
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
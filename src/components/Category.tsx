import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Label } from './ui/typography'
import { screenWidth } from '../lib/utils';

const categoryEmojis = {
  Food: "🍜",
  Family: "👥",
  Fuel: "⛽️",
  Education: "📖",
  Shopping: "🛍️",
  Socializing: "🎉",
  Transfer: "🔃",
  Housing: "🏠",
  "Bills/Utilities": "💡",
  Healthcare: "💊",
  "Phone/Internet": "📱",
  Entertainment: "🎬",
  Travel: "✈️",
  Withdrawal: "🏧",
  Transportation: "🚌",
  Miscellaneous: "🍀",
};

const Category = ({title}) => {
  const emoji = categoryEmojis[title] || "❓";
  return (
    <Pressable android_ripple={{color: 'white', radius: 100}} style={styles.container}>
      <Label size={24}>{emoji}</Label>
      <Label variant="Medium">{title}</Label>
    </Pressable>
  );
}

export default Category

const styles = StyleSheet.create({
  container: {
    gap: 8,
    width: screenWidth / 2 - 24,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: "#F6F8FA",
    borderRadius: 8,
    flexDirection: 'row',
    alignItems :'center'
  },
});
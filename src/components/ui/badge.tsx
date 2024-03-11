import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Badge = ({ active = false, text, style = {} }) => {
  return (
    <Pressable style={[styles.badge, active ? styles.active : styles.inactive, style]}>
      <Text style={active ? styles.activeText : styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Badge;

  const styles = StyleSheet.create({
    badge: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    active: {
      backgroundColor: "#0E0E12",
    },
    inactive: {
      borderWidth: 1,
      borderColor: "#CED0D5",
    },
    activeText: {
      fontFamily: "Poppins_500Medium",
      fontSize: 12,
      color: "white",
    },
    text: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 12,
      color: "#6A7183",
    },
  });

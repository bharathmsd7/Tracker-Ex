import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Label } from "./ui/typography";
import { ChevronRight } from "lucide-react-native";
const CategoryPicker = ({ label, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Label variant="SemiBold">{label}</Label>
      <View style={[styles.inputContainer]}>
        <Label
          variant="Medium"
        >Food</Label>
        <ChevronRight size={24} color={"black"} />
      </View>
    </Pressable>
  );
};

export default CategoryPicker;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "#ffffff",
    marginTop: 4,
    marginBottom: 16,
    fontFamily: "Poppins_500Medium",
    color: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

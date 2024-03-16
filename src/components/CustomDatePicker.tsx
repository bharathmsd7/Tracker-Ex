import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Label } from "./ui/typography";
import { CalendarDays } from "lucide-react-native";
const CustomDatePicker = ({selectedDate, label, onPress}) => {
  const formattedDate = selectedDate
    ? selectedDate.split("-").reverse().join("-")
    : "";

  return (
    <Pressable onPress={onPress}>
      <Label variant="SemiBold">{label}</Label>
      <View style={[styles.inputContainer]}>
        <Label variant="Medium" color={formattedDate ? "black" : "grey"}>
          {formattedDate ? formattedDate : "Select Date"}
        </Label>
        <CalendarDays size={24} color={"black"} />
      </View>
    </Pressable>
  );
};

export default CustomDatePicker;

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
    color: 'black',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});
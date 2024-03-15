import { StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Label } from "./ui/typography";

interface Props {
  label?: string,
  placeholder?: string
}
const InputText = ({label, placeholder}: Props) => {
  const [isActive, setIsActive] = useState(false); 
  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  return (
    <View>
      <Label variant="SemiBold">{label}</Label>
      <TextInput placeholder={placeholder} style={[styles.inputContainer, isActive && styles.inputActive]}
        onFocus={handleFocus} 
        onBlur={handleBlur} 
        cursorColor={"#3677F3"}
        selectionColor={"grey"}
        >
      </TextInput>
    </View>
  )
}

export default InputText;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: "#ffffff",
    marginTop: 4,
    marginBottom: 16,
    fontFamily: "Poppins_500Medium",
  },
  inputActive: {
    borderColor: "#3677F3", 
  },
});
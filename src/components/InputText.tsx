import { StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Label } from "./ui/typography";

interface Props {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
}
const InputText = ({
  label,
  placeholder,
  value,
  keyboardType,
  onChangeText,
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);
  return (
    <View>
      <Label variant="SemiBold">{label}</Label>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.inputContainer, isActive && styles.inputActive]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        cursorColor={"#3677F3"}
        selectionColor={"grey"}
        keyboardType={keyboardType}
       />
    </View>
  );
};

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
import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { Label } from './ui/typography'

interface Props {
    label: string,
    onPress?: () => void,
    style?: {},
    variant?: 'Normal' | 'Outline' | 'Disabled'
}
const Button = ({label, style, onPress, variant = 'Normal'}: Props) => {
  return (
    <Pressable
      disabled={variant === "Disabled"}
      onPress={onPress}
      style={[
        styles.container,
        style,
        variant === "Disabled" && styles.disabled,
        variant === "Outline" && styles.outlined,
        variant === "Normal" && styles.primary,
      ]}
    >
      <Label
        variant="SemiBold"
        color={"white"}
        style={[
          variant === "Disabled" && { color: "grey" },
          variant === "Outline" && { color: "black" },
        ]}
      >
        {label}
      </Label>
    </Pressable>
  );
}

export default Button

const styles = StyleSheet.create({
  container: {
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  primary: {
    backgroundColor: "#0E0E12",
  },
  disabled: {
    backgroundColor: "#E5E5E5",
  },
  outlined: {
    borderWidth: 2,
    borderColor: "#0E0E12",
  },
});
import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { Label } from './ui/typography'

interface Props {
    label: string,
    onPress?: () => void
}
const Button = ({label, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Label variant='SemiBold' color='white'>{label}</Label>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0E0E12",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
});
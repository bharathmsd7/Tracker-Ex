import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { MoveLeft } from 'lucide-react-native';

interface Props {
    style? : {},
    navigation? : any
}
const BackButton = ({style, navigation}: Props) => {
  return (
    <Pressable onPress={() => navigation.goBack()} style={[styles.container, style]}>
      <MoveLeft size={24} color={"black"}/>
    </Pressable>
  );
}

export default BackButton

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#F8FAFB",
    alignItems: "center",
    justifyContent: "center",
    // elevation: 2
  },
});
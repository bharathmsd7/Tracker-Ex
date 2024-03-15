import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Label, H1 } from './ui/typography';

const ExpenseListCard = () => {
  return (
    <Pressable style={styles.container}>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <View style={styles.rounded}>
          <Text style={{ fontSize: 24 }}>🍔</Text>
        </View>
        <View>
          <Label>Surya and Pori</Label>
          <Label style={{ color: "#6c757d", fontSize: 13 }}>11:21 AM</Label>
        </View>
      </View>
      <H1 style={{ color: "#000000", fontSize: 18 }}>₹1,200</H1>
    </Pressable>
  );
}

export default ExpenseListCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // elevation: 1,
  },
  rounded: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderColor: "#dee2e6",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
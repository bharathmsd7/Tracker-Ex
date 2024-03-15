import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { screenHeight, screenWidth } from "../lib/utils";
import { Label } from "../components/ui/typography";
import InputText from "../components/InputText";
import Button from "../components/Button";

const AddExpenseScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.headerContainer}>
        <Label variant="Bold" size={24}>
          Add new expense
        </Label>
        <Label variant="Medium" size={16} color="#34363E">
          Enter the details of your expense to help you track you spending
        </Label>
      </View>
      <View style={styles.formContainer}>
        <InputText label={"Enter Amount"} placeholder="Enter Amount" />
        <InputText label={"Description"} />
        <Button label="Add Expense"/>
      </View>
    </View>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F8FA",
    paddingHorizontal: 16,
    height: screenHeight - 50,
  },
  headerContainer: {
    marginVertical: 16
  },
  formContainer: {

  }
});

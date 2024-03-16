import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Label } from "../components/ui/typography";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { Calendar } from "react-native-calendars";
import CustomDatePicker from "../components/CustomDatePicker";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import CategoryPicker from "../components/CategoryPicker";

const AddExpenseScreen = ({navigation}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { bottom: safeBottomArea } = useSafeAreaInsets();
  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current!.present();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  const insets = useSafeAreaInsets();
  const [selectedDate, setSelectedDate] = useState(null); 
  const [amount, setAmount] = useState(null); 
  const handleDateChange = (date) => {
    setSelectedDate(date.dateString);
  };
  return (
    <BottomSheetModalProvider>
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
          <Label variant="Medium" size={14} color="#34363E">
            Enter the details of your expense to help you track you spending
          </Label>
        </View>
        <View style={styles.formContainer}>
          <InputText
            value={amount}
            onChangeText={setAmount}
            keyboardType={"numeric"}
            label={"Enter Amount"}
            placeholder="Enter amount"
          />
          <InputText
            label={"Description"}
            keyboardType={"default"}
            placeholder="Enter description for expense"
          />
          <CategoryPicker label={"Category"} onPress={() => navigation.navigate('Category')} />
          <CustomDatePicker
            label={"Date"}
            selectedDate={selectedDate}
            onPress={handlePresentPress}
          />
          <Button variant="Disabled" label="Add Expense" />
        </View>
        {/* Bottom sheet */}
        <BottomSheetModal
          ref={bottomSheetRef}
          enableDynamicSizing={true}
          bottomInset={safeBottomArea + 200}
          enablePanDownToClose={false}
          style={styles.sheetContainer}
          backgroundComponent={null}
          detached={true}
        >
          <BottomSheetView
            style={styles.contentContainerStyle}
            enableFooterMarginAdjustment={true}
          >
            <Label variant="SemiBold" size={24} style={{ textAlign: "center" }}>
              Select Date 📅
            </Label>
            <Calendar
              markedDates={{ [selectedDate]: { selected: true } }}
              theme={{
                arrowColor: "#000000",
                selectedDayBackgroundColor: "#000000",
                todayTextColor: "#000000",
              }}
              maxDate={new Date().toISOString().slice(0, 10)}
              onDayPress={handleDateChange}
            />
            <Button
              style={{ marginTop: 16 }}
              label="Confirm"
              onPress={handleClosePress}
              variant={selectedDate ? "Normal" : "Disabled"}
            />
          </BottomSheetView>
        </BottomSheetModal>
        {/* Bottom sheet */}
      </View>
    </BottomSheetModalProvider>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FA",
    paddingHorizontal: 16,
  },
  headerContainer: {
    marginVertical: 32,
  },
  contentContainerStyle: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  sheetContainer: {
    backgroundColor: "white",
    marginHorizontal: 16,
    borderRadius: 8,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.75,
    shadowRadius: 16.0,
    elevation: 25,
  },
  formContainer: {
    // marginTop: 8
  },
});

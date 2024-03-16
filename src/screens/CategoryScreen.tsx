import { StyleSheet, FlatList, View } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import { screenHeight } from '../lib/utils';
import BackButton from '../components/BackButton';
import { Label } from '../components/ui/typography';
import Category from '../components/Category';

const categoryData = [
  {
    name: "Food",
  },
  {
    name: "Family",
  },
  {
    name: "Fuel",
  },
  {
    name: "Education",
  },
  {
    name: "Shopping",
  },
  {
    name: "Socializing",
  },
  {
    name: "Transfer",
  },
  {
    name: "Housing",
  },
  {
    name: "Bills/Utilities",
  },
  {
    name: "Healthcare",
  },
  {
    name: "Phone/Internet",
  },
  {
    name: "Entertainment",
  },
  {
    name: "Travel",
  },
  {
    name: "Withdrawal",
  },
  {
    name: "Transportation",
  },
  {
    name: "Miscellaneous",
  },
];

const CategoryScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <BackButton style={{ marginTop: 8 }} navigation={navigation} />
      <View style={styles.headerContainer}>
        <Label variant="Bold" size={24}>
          Select Category
        </Label>
        <Label variant="Medium" size={14} color="#34363E">
          Select a category that best describes what you spent your money on
        </Label>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={categoryData}
          renderItem={({ item }) => <Category title={item.name} />}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
    </View>
  );
}

export default CategoryScreen

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
  headerContainer: {
    marginVertical: 8
  },
  bodyContainer: {}
});
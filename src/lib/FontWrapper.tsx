import React from 'react'
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_300Light,
  Poppins_200ExtraLight,
  Poppins_100Thin,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/poppins";
// import {
//   useSafeAreaInsets,
// } from "react-native-safe-area-context";
import { View } from 'react-native'

const FontWrapper = ({children}) => {
    const [fontLoads] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_300Light,
        Poppins_200ExtraLight,
        Poppins_100Thin,
        Poppins_600SemiBold,
        Poppins_800ExtraBold,
    });
    if (!fontLoads) {
        return null;
    }
    // const insets = useSafeAreaInsets();
    return (
        <View >
          {children}
        </View>
    );
}

export default FontWrapper
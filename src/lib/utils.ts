import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Dimensions } from "react-native";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;
import "../global.css";

import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View className="bg-green-500 flex-1">
      <Stack />
    </View>
  );
}

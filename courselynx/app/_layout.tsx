import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Development Screen",
          }}
        />
        <Stack.Screen
          name="chat"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="registration"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}

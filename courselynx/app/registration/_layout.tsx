// Template layout file for registration pages
import { Stack } from "expo-router";
export default function RegistrationLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Register" }} />
      <Stack.Screen name="detail" options={{ headerShown: false }} />
    </Stack>
  );
}

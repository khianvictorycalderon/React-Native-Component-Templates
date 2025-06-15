import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}> {/* Decides whether to show or hide the title section */}
       <Stack.Screen name="index" options={{ title: "Choose Templates" }} />
       <Stack.Screen name="components/Text_Section/usage" options={{ title: "Text Section Usage" }} />
    </Stack>
  );
}

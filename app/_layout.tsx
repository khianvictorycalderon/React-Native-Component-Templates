import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}> {/* Decides whether to show or hide the title section */}
       <Stack.Screen name="index" options={{ title: "Choose Templates" }} />
       <Stack.Screen name="components/Card/usage" options={{ title: "Card Usage" }} />
       <Stack.Screen name="components/InfoCard/usage" options={{ title: "Info Card Usage" }} />
       <Stack.Screen name="components/XText/usage" options={{ title: "XText Usage" }} />
       <Stack.Screen name="components/CustomizableButton/usage" options={{ title: "Customizable Button Usage" }} />
    </Stack>
  );
}

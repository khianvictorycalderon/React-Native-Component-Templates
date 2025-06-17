import { RelativePathString, useRouter } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";

const templatesData = [
  {
    Label: "Card (Standalone)",
    Path: "components/Card/usage"
  },
  {
    Label: "Info Card (Set)",
    Path: "components/InfoCard/usage"
  },
  {
    Label: "XText (Fully Customizable)",
    Path: "components/XText/usage"
  },
  {
    Label: "Customizable Button",
    Path: "components/CustomizableButton/usage"
  },
  {
    Label: "Background Image (Shortcut)",
    Path: "components/BackgroundImage/usage"
  }
];

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.mainContent}>
      {templatesData.map((item, index) => (
        <View key={`${item.Label}${index}`} style={{ marginBottom: 10 }}>
          <Text
            style={[styles.templateTitle, styles.href]}
            onPress={() => router.push(item.Path as RelativePathString)}
          >
           • {item.Label}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
}

import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

interface TextSectionProps {
  Title: string;
  Content: React.ReactNode;
  Style?: {
    TextColor?: string;
    BackgroundColor?: string;
    DividerColor?: string;
  };
}

export default function TextSection({
  Title = "Default Title",
  Content = <Text>Default Content</Text>,
  Style,
}: TextSectionProps) {
  return (
    <SafeAreaView
      style={[
        textSectionStyles.main,
        Style?.BackgroundColor ? { backgroundColor: Style.BackgroundColor } : {},
      ]}
    >
      <Text
        style={[
          textSectionStyles.title,
          Style?.TextColor ? { color: Style.TextColor } : {},
        ]}
      >
        {Title}
      </Text>

      <View style={[
            textSectionStyles.divider,
            Style?.DividerColor ? { backgroundColor: Style.DividerColor } : {}
        ]}
      />

      {Content}
    </SafeAreaView>
  );
}

const textSectionStyles = StyleSheet.create({
  main: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc", // This acts like <hr />
    marginVertical: 10,
    width: "100%",
  },
});

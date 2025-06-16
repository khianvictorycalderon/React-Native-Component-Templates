import React from "react";
import { ScrollView, Text } from "react-native";
import TextSection from "./TextSection";

export default function Usage() {
  return (
    <ScrollView>
      <TextSection
        Title="Welcome to the Section"
        Content={<Text>This is the content area of the section.</Text>}
        Style={{
          BackgroundColor: "#BBBBBB",
          TextColor: "white",
        }}
      />
      <TextSection
        Title="Reusable Component"
        Content={<Text>I can reuse this.</Text>}
        Style={{
          BackgroundColor: "#CCCCCC",
          TextColor: "white",
          DividerColor: "red",
        }}
      />
      <TextSection
        Title="Another Example"
        Content={<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>}
        Style={{
          BackgroundColor: "#E6E6FA",
          TextColor: "#333",
          DividerColor: "#666",
        }}
      />
      <TextSection
        Title="Yet Another Section"
        Content={<Text>Aliquam erat volutpat. Praesent ut ligula non mi varius sagittis.</Text>}
        Style={{
          BackgroundColor: "#DFF0D8",
          TextColor: "#2C3E50",
        }}
      />
      <TextSection
        Title="Information Box"
        Content={<Text>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</Text>}
        Style={{
          BackgroundColor: "#FDEBD0",
          TextColor: "#4A235A",
          DividerColor: "#CA6F1E",
        }}
      />
      <TextSection
        Title="Final Note"
        Content={<Text>Thanks for scrolling! Enjoy building your app 🎉</Text>}
        Style={{
          BackgroundColor: "#D6EAF8",
          TextColor: "#1B4F72",
        }}
      />
    </ScrollView>
  );
}

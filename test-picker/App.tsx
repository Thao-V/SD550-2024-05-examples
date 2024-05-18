import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        style={{width: "100%"}}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="C++" value="c++" />
        <Picker.Item label="Golang" value="golang" />
        <Picker.Item label="Rust" value="rust" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="TypeScript" value="typescript" />
        <Picker.Item label="Ruby" value="ruby" />
        <Picker.Item label="C#" value="c#" />
        <Picker.Item label="Kotlin" value="kotlin" />
      </Picker>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

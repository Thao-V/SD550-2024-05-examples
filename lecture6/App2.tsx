import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert, KeyboardAvoidingView, Platform, Image } from "react-native";

export default function App() {
  const [state, setState] = useState({ name: "", email: "" });
  const onSubmit = () => {
    if(state.name.trim() === ""){
      return Alert.alert("Please enter your name");
    }
    Alert.alert(state.name);
  }
  const onChangeName = (text: string) => {
    console.log(text);
    setState({ ...state, name: text })
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios'? "padding": "height"}>
        <Image source={require("./assets/icon.png")} style={styles.image}/>
        <Image source={{uri: "https://picsum.photos/200/300"}} style={styles.image}/>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={state.name}
          onChangeText={onChangeName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={state.email}
          onChangeText={(text: string) => setState({ ...state, email: text })}
        />
        <Button title="Submit" onPress={onSubmit}/>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    width: 300,
    fontSize: 30
  },
  text: {
    backgroundColor: "red",
    color: "white",
    fontSize: 24
  },
  image: {
    width: 100,
    height: 100
  }
});

import { Alert, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./CourseStyles";
import { isEligibleUser } from "../api";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_KEY } from "./constants";
interface LoginProps{
  setLoggedIn: (loggedIn: boolean) => void;
}
export default function Login({setLoggedIn}: LoginProps) {
  const [email, setEmail] = useState("");
  const onLogin = async () => {
    try {
      if(email.trim() === ""){
        return Alert.alert("Please enter email");
      }
      const res = await isEligibleUser(email);
      if(res){
        AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({loggedIn: true}))
        setLoggedIn(true);
      }else{
        return Alert.alert("Wrong email");
      }
    } catch (error) {}
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
      />
      <Pressable style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}

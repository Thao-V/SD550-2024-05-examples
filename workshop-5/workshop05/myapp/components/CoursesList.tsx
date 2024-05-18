import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  FlatList,
  TextInput,
  Pressable,
  Text
} from "react-native";

import Course from "./Course";
import Header from "./Header.ios";
import ICourse from "./ICourse";
import GlobalContext from "./Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_KEY } from "./constants";

export default function CoursesList({navigation}: any) {
  const { state, setLoggedIn } = useContext(GlobalContext);
  const [displayData, setDisplayData] = useState<ICourse[]>(state);
  const [searchText, setSearchText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const onSearch = (text: string) => {
    const arr = state.filter(x =>
      x.title.toLowerCase().includes(text.trim().toLowerCase())
    );
    setDisplayData(arr);
    setSearchText(text);
  };
  const onNavigateToAddCourse = () => {
    navigation.navigate('add-course');
  }
  const onLogout = async () => {
    try {
      await AsyncStorage.removeItem(LOCAL_STORAGE_KEY);
      setLoggedIn(false);
    } catch (error) {
      
    }
  }
  useEffect(
    () => {
      setDisplayData(state);
    },
    [state]
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={onSearch}
        placeholder="Enter something to search"
      />
      <Pressable style={styles.button} onPress={onNavigateToAddCourse}>
        <Text style={styles.buttonText}>Add New Course</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
      <FlatList
        data={displayData}
        renderItem={({ item, index }) => <Course data={item} index={index} />}
        keyExtractor={(course: ICourse) => course.code}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? 30 : 0,
    paddingBottom: 200
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5"
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: "90%",
    margin: 5
  },
  buttonText: {
    fontSize: 30
  }
});

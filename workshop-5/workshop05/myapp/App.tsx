import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import About from "./components/About";
import Home from "./components/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GlobalContext from "./components/Context";
import { useEffect, useState } from "react";
import ICourse from "./components/ICourse";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE_KEY } from "./components/constants";
import { getCourses } from "./api";
import Login from "./components/Login";


// const data = [
//   {
//     title: "Web Application Programming",
//     faculty: "Asaad Saad",
//     code: "CS472",
//     rating: 3,
//     reviews: [
//       {
//         name: "Michael",
//         rating: 3,
//         comment: "It is a good course"
//       }
//     ]
//   },
//   {
//     title: "Modern Web Application",
//     faculty: "Asaad Saad",
//     code: "CS572",
//     rating: 5,
//     reviews: []
//   },
//   {
//     title: "Enterprise Architecture",
//     faculty: "Joe Bruen",
//     code: "CS557",
//     rating: 4,
//     reviews: []
//   },
//   { title: "Algorithms", faculty: "Clyde Ruby", code: "CS421", rating: 5 },
//   {
//     title: "Object Oriented JavaScript",
//     faculty: "Keith Levi",
//     code: "CS372",
//     rating: 3,
//     reviews: []
//   },
//   { title: "Big Data", faculty: "Prem Nair", code: "CS371", rating: 5 },
//   {
//     title: "Web Application Architecture",
//     faculty: "Rakesh Shrestha",
//     code: "CS377",
//     rating: 5,
//     reviews: []
//   },
//   {
//     title: "Big Data Analytics",
//     faculty: "Mrudula Mukadam",
//     code: "CS378",
//     rating: 4,//average rating
//     reviews: []
//   }
// ];

const { Navigator, Screen } = createBottomTabNavigator();
export default function App() {
  const [state, setState] = useState<ICourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    async function loadData(){
      try {
        setLoading(true);
        const data = await AsyncStorage.getItem(LOCAL_STORAGE_KEY);
        if(data){
          const obj = JSON.parse(data);
          setLoggedIn(obj.loggedIn);
        }
        const courses = await getCourses();
        setState(courses);
      } catch (error) {
        
      }
      setLoading(false);
    }
    loadData();
  }, []);
  
  if(loading){
    return <ActivityIndicator size={"large"}/>
  }

  if(!loggedIn){
    return <Login setLoggedIn={setLoggedIn}/>
  }

  return (
    <GlobalContext.Provider value={{state, setState, setLoggedIn}}>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen
            name="home"
            component={Home}
            options={{
              title: "Courses",
              tabBarIcon: ({ color }) =>
                <MaterialCommunityIcons color={color} size={24} name="home" />
            }}
          />
          <Screen
            name="about"
            component={About}
            options={{
              title: "About",
              tabBarIcon: ({ color }) =>
                <MaterialCommunityIcons
                  color={color}
                  size={24}
                  name="account"
                />
            }}
          />
        </Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
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

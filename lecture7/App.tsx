import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { MaterialCommunityIcons } from "react-native-vector-icons";

import Home from "./components/Home";
import ProductList from "./components/ProductList";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Settings from "./components/Settings";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="home">
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            title: "Home",
            tabBarIcon: ({ color }) =>
              <MaterialCommunityIcons name="home" color={color} size={25} />
          }}
        />
        <Tab.Screen name="product-list" component={ProductList} 
        options={{
          title: "Product List",
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="playlist-music" color={color} size={25} />
        }}/>
        <Tab.Screen name="settings" component={Settings} 
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="cog" color={color} size={25} />
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
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

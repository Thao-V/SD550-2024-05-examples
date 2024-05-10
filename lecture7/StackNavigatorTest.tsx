import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import Home from './components/Home';
import ProductList from './components/ProductList';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='home'>
        <Screen name="home" component={Home} options={{headerShown: true}}/>
        <Screen name="product-list" component={ProductList} options={{headerShown: true}}/>
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

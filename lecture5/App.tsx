import { StyleSheet, Text, View, Button, Pressable, Dimensions, TouchableHighlight } from 'react-native';
const width = Dimensions.get('window').width;
import { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState("Hello World");
  const [count, setCount] = useState(0);
  const onPress = () => {
    setCount(count + 1);
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{message}</Text> */}
      {/* <View style={styles.greenBox}/>
      <View style={styles.redBox}/> */}
      <Text style={styles.text}>{count}</Text>
      {/* <Button title="Increase" onPress={onPress} color={"grey"}/> */}
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Increase</Text>
      </Pressable>
      <TouchableHighlight onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Increase</Text>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    backgroundColor: "red"
  },
  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  redBox: {
    width: 100,
    height: 100,
    backgroundColor: "red"
  },
  button: {
    borderWidth: 1,
    borderColor: 'grey',
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    width: width
  },
  buttonText:{
    fontSize: 30,
    color: 'green'
  }
});


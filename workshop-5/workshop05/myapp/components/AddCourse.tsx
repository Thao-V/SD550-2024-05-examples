import { useContext, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ICourse from "./ICourse";
import { createCourse } from "../api";
import GlobalContext from "./Context";
import styles from './CourseStyles';

export default function AddCourse({navigation}: any){
  const [course, setCourse] = useState<ICourse>({title: "", faculty: "", code: "", reviews: [], rating: 5})
  const {state, setState} = useContext(GlobalContext);
  const onSubmit = async () => {
    try {
      const res = await createCourse(course);
      if(res !== null){
        setState([...state, res]);
        navigation.goBack();
        //Alert.alert("This course is added successfully");
      }else{
        Alert.alert("Failed to add this course");
      }
    } catch (error) {
      
    }
  }
  return(
    <View style={styles.container}>
      <TextInput placeholder="Title" style={styles.input} value={course.title} onChangeText={text => setCourse({...course, title: text})}/>
      <TextInput placeholder="Faculty" style={styles.input} value={course.faculty} onChangeText={text => setCourse({...course, faculty: text})}/>
      <TextInput placeholder="Code" style={styles.input} value={course.code} onChangeText={text => setCourse({...course, code: text})}/>
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  )
}


import { View, Pressable, Text, TextInput } from "react-native";
import styles from "./CourseStyles";
import { useContext, useState } from "react";
import ICourse from "./ICourse";
import GlobalContext from "./Context";
import { updateCourse } from "../api";

export default function UpdateCourse({ navigation, route }: any) {
  const data = route.params;
  const [course, setCourse] = useState<ICourse>(data);
  const { state, setState } = useContext(GlobalContext);
  const onSubmit = async () => {
    try {
      const res = await updateCourse(course.id!, course);
      if(res){
        const index = state.findIndex(x => x.code === course.code);
        if(index !== -1){
          const arr = [...state];
          arr[index] = res;
          setState(arr);
          navigation.goBack();
        }
      }
    } catch (error) {
      
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        style={styles.input}
        value={course.title}
        onChangeText={text => setCourse({ ...course, title: text })}
      />
      <TextInput
        placeholder="Faculty"
        style={styles.input}
        value={course.faculty}
        onChangeText={text => setCourse({ ...course, faculty: text })}
      />
      <TextInput
        placeholder="Faculty"
        style={styles.input}
        value={course.code}
        editable={false}
      />
      <Text style={{ fontSize: 30 }}>
        Code: {course.code}
      </Text>
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

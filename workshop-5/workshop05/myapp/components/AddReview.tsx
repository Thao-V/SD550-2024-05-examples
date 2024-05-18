
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Stars from './Stars';
import StarButton from './StarButton';
import { useContext, useState } from 'react';
import GlobalContext from './Context';
import { IReview } from './ICourse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOCAL_STORAGE_KEY } from './constants';
import { updateCourse } from '../api';

const AddReview = ({navigation, route}: any) => {
  const {state, setState} = useContext(GlobalContext);
  const [selectedValue, setSelectedValue] = useState(0);
  const [review, setReview] = useState<IReview>({name: "", rating: 0, comment: ""})
  const {code} = route.params;
  const onSubmit = async () => {
    const index = state.findIndex(x => x.code === code);
    if(index !== -1){
      const obj = {...state[index]};
      obj.reviews.push({...review, rating: selectedValue});
      let sum = 0;
      for(let i = 0; i < obj.reviews.length; i++){
        sum += obj.reviews[i].rating;
      }
      obj.rating = Math.ceil(sum/obj.reviews.length);
      state[index] = obj;
      //AsyncStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
      try {
        await updateCourse(obj.id!, obj);
      } catch (error) {
        
      }
      setState([...state]);
      navigation.navigate("course-details", obj);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add Review</Text>
      <TextInput style={styles.input} placeholder='Name' value={review.name} 
      onChangeText={(text: string) => setReview({...review, name: text})}
      />
      <Text style={styles.ratingText}>Your Rating</Text>
      <View style={styles.stars}>
        {
          [1, 2, 3, 4, 5].map((value: number) => <StarButton key={value} value={value} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>)
        }
      </View>
      <TextInput style={[styles.input, {height: 200}]} multiline={true} placeholder='Comment'
      value={review.comment}
      onChangeText={(text: string) => setReview({...review, comment: text})}
      />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitButtonText} >Submit Review</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },
  button: {
    paddingHorizontal: 10
  },
  headerText: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 24
  },
  ratingText: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    marginVertical: 40
  },
  stars: {
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "center"
  },
  starButton: {
    padding: 5
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center"
  }
});

export default AddReview;

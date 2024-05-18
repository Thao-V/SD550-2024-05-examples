import React from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Stars from './Stars';
import ReviewList from './ReviewList';


const CourseDetails = ({navigation, route}: any) => {
  const { title, faculty, code, rating, reviews } = route.params;
  const onNavigateToAddReview = () => {
    navigation.navigate("add-review", route.params);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{code}</Text>
      <Text style={styles.info}>{faculty}</Text>
      <Stars rating={rating}/>
      <ReviewList data={reviews}/>
      <Pressable style={styles.button} onPress={onNavigateToAddReview}>
        <Text style={styles.buttonText}>Add Review</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginTop: 5
  },
  info: {
    color: 'grey',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066cc',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default CourseDetails;

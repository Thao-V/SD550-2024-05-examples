import React from 'react';
import { Text, View, Image, Platform } from 'react-native';

import HeaderStyle from '../styles/HeaderStyle';
import CourseImage from '../images/course.png';

const Header = () => {
  return (
    <View style={[Platform.OS === 'ios'? HeaderStyle.ios : HeaderStyle.android, {justifyContent: 'center', alignItems: 'center'}]}>
      <Image source={CourseImage} style={{width: 100, height: 100}}/>
      <Text style={{fontSize: 30, margin: 5}}>Courses Review</Text>
    </View>
  )
};

export default Header;

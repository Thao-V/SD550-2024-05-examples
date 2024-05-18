import React from 'react';

import { View, Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

interface StarsProps{
  rating: number;
}
const Stars = ({ rating }: StarsProps) => {
  const stars = [...Array(rating)];

  return (

    <View style={{ flexDirection: 'row' }}>
      {stars.map((_, i) => {
        return <AntDesign key={i} name="star" size={12} color="#FFD64C" />
      })}
    </View>
  );
};

export default Stars;

import React from 'react';
import { View, Title, Subtitle } from '../../../../components/Mainstyle.js';
import { TouchableOpacity, Btn } from './Style.js';

const Card = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={ props.onPress }
      >
        <Title>{ props.title }</Title>
        <Subtitle>{ props.subtitle}</Subtitle>
        <Btn>Ver</Btn>
      </TouchableOpacity>
    </View>
  )
}

export default Card;
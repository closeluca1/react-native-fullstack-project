import React from 'react';
import { TextInput, Text, View } from './Style.js';

const Input = (props) => {
  return (
    <View>
      <Text>{ props.label }</Text>
      <TextInput
        placeholder={ props.placeholder }
        value={ props.value }
        onChangeText={ props.onChangeText }
        keyboardType={ props.keyboardType }
      />
    </View>
  )
}

export default Input;
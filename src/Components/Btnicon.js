import React from 'react';
import { View } from './Mainstyle.js';
import { AntDesign } from '@expo/vector-icons';
import Colors from './Colors.js';

const Btnicon = (props) => {
  return(
    <View>
      <AntDesign 
        name={ props.name } size={32} 
        color={ Colors.primary } />
    </View>
  )
}

export default Btnicon;
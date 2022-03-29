import styled from 'styled-components/native';
import Colors from '../../../../components/Colors.js';


export const TouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 125px;
  padding: 15px 5% 0 5%;
  justify-content: center;
  border-left-width: 4px;
  border-left-color: ${ Colors.primary };
  border-radius: 10px;
  background: ${ Colors.white };
`

export const Btn = styled.Text`
  margin: -25px 0 15px 0;
  font-size: 14px;
  font-weight: bold;
  text-align: right;
  color: ${ Colors.primary };
`
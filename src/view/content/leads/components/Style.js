import styled from 'styled-components/native';
import Colors from '../../../../components/Colors';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  paddingTop: ${ Platform.OS === 'android' ? '50px' : '25px' };
  background: ${ Colors.light }
`

export const SafeAreaView = styled.SafeAreaView`
  padding: 10px 5% 0 5%;
  margin-bottom: 20px;
`

export const Text = styled.Text`
  font-size: 18px;
  margin: 0;
  color: ${ Colors.dark }
`

export const TextInput = styled.TextInput`
  height: 40px;
  padding-left: 15px;
  border-width: 1px;
  border-radius: 5px;
  margin: 10px 0 20px 0;
  font-size: 18px;
  color: ${ Colors.dark }
`

export const TouchableOpacity = styled.TouchableOpacity`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 20px 0;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${ Colors.primary }
`

export const View = styled.View`
  width: 100%;
`
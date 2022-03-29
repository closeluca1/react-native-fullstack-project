import styled from 'styled-components/native';
import Colors from './Colors.js';


export const Container = styled.SafeAreaView`
  flex: 1;
  
  paddingTop: ${ Platform.OS === 'android' ? '50px' : '25px' };
  background: ${ Colors.light };
`

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`

export const ScrollView = styled.ScrollView`
  max-height: 80%;
  padding: 10px 5% 0 5%;
`

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${ Colors.primary };
`

export const Subtitle = styled.Text`
  font-size: 22px;
  margin: 5px 0 20px 0;
  color: ${ Colors.grey }
`

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`

export const Text = styled.Text`
  font-size: 18px;
  margin-top: 20px;
  color: ${ Colors.dark }
`

export const View = styled.View`
  width: 100%;
  padding-bottom: 25px;
`

export const Question = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 30px;
  color: ${ Colors.primary }
`

export const Icon = styled.TouchableOpacity`
  margin-top: ${ Platform.OS === 'android' ? '32px' : '16px' };
  align-self: flex-end;
  padding: 0 5% 0 5%;
  zIndex: 10;
`
export const BannerArea = styled.View`
  width: 100%;
  height: 90px;
  justify-content: flex-end;
`
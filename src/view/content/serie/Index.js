import React, { useState, useEffect } from 'react';
import { Container, Content, ScrollView, Image, Title, Subtitle, Text, View, Icon } from '../../../components/Mainstyle.js';
import Share from '../../../components/Share.js';
import Btnicon from '../../../components/Btnicon.js';
import BannerAd from '../../../components/BannerAd.js';
import ServiceSerie from '../../../database/ServiceSerie.js';

import { useNavigation } from '@react-navigation/native';


const Serie = () => {
  
  const navigation = useNavigation();
  
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItems();

  }, [])

  const getItems = async () => {
    const data = await ServiceSerie.getItem();
    setItem(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  
return (
  <Container>
    <Content>
      
      <Icon onPress={ () => navigation.navigate('Home') }>
        <Btnicon name='back'/>
      </Icon>

      <ScrollView>
        
        {
          item.map((doc) => {
            return (
              <View
                
                key={ doc.id }
              >
                <Title>{ doc.serieName }</Title>

                <Subtitle>{ doc.subtitle }</Subtitle>
                
                <Image source={{ uri: doc.serieThumb }}/>

                <Text>{ doc.description }</Text>

                <Share/>


                
              </View>
            )
          })
        }

      </ScrollView>
      
      <BannerAd/>

    </Content>
  </Container>
)
}

export default Serie;
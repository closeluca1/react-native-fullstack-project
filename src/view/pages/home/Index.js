import React, { useState } from 'react';
import BannerAd from '../../../components/BannerAd.js';
import Btnicon from '../../../components/Btnicon.js';
import { Container, Content, Icon, ScrollView, BannerArea, Title, Subtitle, Text } from '../../../components/Mainstyle.js';
import Card from './components/Card.js';

// import NotificationItem from '../../../database/Notification.js';

import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <Content>

        <Icon
          onPress={ () => navigation.navigate('Leads') }
        >
          <Btnicon name='form'/>
        </Icon>

      

        <ScrollView>

          {/* <NotificationItem/> */}

          <Title>Escolha</Title>
          <Subtitle>Seu interesse de hoje</Subtitle>

          <Card 
            title='Filme' 
            subtitle='Live action'
            onPress={ () => navigation.navigate('MovieLiveAction') }
          />

          <Card 
            title='Filme' 
            subtitle='Animção' 
            onPress={ () => navigation.navigate('MovieAnimation') }/>

          <Card 
            title='Seriado' 
            subtitle='Diversos'
            onPress={ () => navigation.navigate('Serie') }
          />

          <Card 
            title='Animação' 
            subtitle='Diversos'
            onPress={ () => navigation.navigate('Anime') }
          />


        </ScrollView>

        <BannerArea>
          <BannerAd/>
        </BannerArea>

      </Content>
    </Container>
  )
}

export default Home;
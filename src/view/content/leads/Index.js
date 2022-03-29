import React, { useState, useEffect } from 'react';
import { Container, Content, Title, Subtitle, View, Icon, BannerArea } from '../../../components/Mainstyle.js';
import { KeyboardAvoidingView, TouchableOpacity, Text, SafeAreaView } from './components/Style.js';
import { Pressable, StyleSheet } from 'react-native';

import Btnicon from '../../../components/Btnicon.js';
import BannerAd from '../../../components/BannerAd.js';
import Input from './components/Input.js';
import Leads from '../../../database/Leads.js';
// import { doc } from 'firebase/firestore';


import { useNavigation } from '@react-navigation/native';


const LeadPage = () => {
  
  const navigation = useNavigation();

  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');

  const handleSubmit = async () => {
    
    try {
      const newLead = {
        leadName,
        leadEmail,
        leadPhone,
      }

      await Leads.createLead(newLead);
      alert('Cadastro feito com sucesso!');
      
      
    } catch (error) {
      alert(error.message);
    }
  }


return (
  <KeyboardAvoidingView behavior='padding'>
      {/* <Container> */}

        <Icon onPress={ () => navigation.navigate('Home') }>
          <Btnicon name='back'/>
        </Icon>

          <SafeAreaView>
            
            <Input
              label='Nome completo:'
              placeholder='Nome completo'
              keyboardType={'default'}
              value={ leadName }
              onChangeText={ (value) => setLeadName(value) }
            />

            <Input
              label='E-mail:'
              placeholder='Seu melhor e-mail'
              keyboardType={'email-address'}
              value={ leadEmail }
              onChangeText={ (value) => setLeadEmail(value) }
            />

            <Input
              label='Telefone:'
              placeholder='(00) 9 9999-9999'
              keyboardType={'phone-pad'}
              value={ leadPhone }
              onChangeText={ (value) => setLeadPhone(value) }
            />

            <TouchableOpacity
              onPress={() => {handleSubmit(); alert('Estamos Salvando seu cadastro. (:')} }
              
            >
              <Text>Cadastrar</Text>  
            </TouchableOpacity>
              


          </SafeAreaView>

        <BannerArea>
          <BannerAd/>
        </BannerArea>

      {/* </Container> */}
    </KeyboardAvoidingView>
)
}

export default LeadPage;
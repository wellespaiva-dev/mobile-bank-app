import React, {useState} from 'react';
import {Container, Back, CardContainer, Title, Information} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CodeVerification from '../../components/CodeVerification';

export default function Verification({navigation}: any) {
  const [number] = useState('');

  return (
    <Container>
      <Back onPress={() => navigation.navigate('Registration')}>
        <Icon name="arrow-back-ios" color="#29304D" size={28} />
      </Back>
      <CardContainer>
        <Title>Verification</Title>
        <Information>Enter 4 digit code we sent to {number}</Information>
        <CodeVerification />
      </CardContainer>
    </Container>
  );
}

import React, {useState} from 'react';
import {
  Container,
  Back,
  CardContainer,
  Title,
  Information,
  FooterContainer,
  ButtonContinue,
  TextContinue,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CodeVerification from '../../components/CodeVerification';
import Coutdown from '../../components/Countdown';

export default function Verification({navigation, route}: any) {
  const {value} = route.params;

  const [time] = useState(0.5 * 60);

  return (
    <Container>
      <Back onPress={() => navigation.navigate('Registration')}>
        <Icon name="arrow-back-ios" color="#29304D" size={28} />
      </Back>
      <CardContainer>
        <Title>Verification</Title>
        <Information>Enter 4 digit code we sent to {value}</Information>
        <CodeVerification />
        <Coutdown tempo={time} />
      </CardContainer>
      <FooterContainer>
        <ButtonContinue
          onPress={() => navigation.navigate('InformationPessoal')}>
          <TextContinue>Continue</TextContinue>
        </ButtonContinue>
      </FooterContainer>
    </Container>
  );
}

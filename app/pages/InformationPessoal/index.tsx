import React from 'react';
import {
  Container,
  Back,
  CardContainer,
  Title,
  Information,
  FooterContainer,
  ButtonContinue,
  TextContinue,
  FormContainer,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormInformationPessoal from '../../components/FormInformationPessoal';

export default function InformationPessoal({navigation}: any) {
  return (
    <Container>
      <Back onPress={() => navigation.navigate('Verification')}>
        <Icon name="arrow-back-ios" color="#29304D" size={28} />
      </Back>
      <CardContainer>
        <Title>Fill your information</Title>
        <Information>Enter your details</Information>
        <FormContainer showsVerticalScrollIndicator={false}>
          <FormInformationPessoal />
        </FormContainer>
      </CardContainer>
      <FooterContainer>
        <ButtonContinue onPress={() => navigation.navigate('AccountSucess')}>
          <TextContinue>Continue</TextContinue>
        </ButtonContinue>
      </FooterContainer>
    </Container>
  );
}

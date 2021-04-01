import React from 'react';

import {
  Container,
  Title,
  Information,
  Information2,
  Back,
  CardContainer,
  FooterContainer,
  ButtonStart,
  TextStart,
  Information3,
  ButtonPrivacyPolicy,
  TextPrivacyPolicy,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import CountrySelect from '../../components/CountrySelect';

export default function Registration({navigation}: any) {
  return (
    <Container>
      <Back onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-back-ios" color="#29304D" size={28} />
      </Back>
      <CardContainer>
        <Title>Registration</Title>
        <Information>Enter your mobile number, we will send</Information>
        <Information>you OTP to verify later</Information>
        <Information2>Enter your location and Phone</Information2>
        <CountrySelect />
      </CardContainer>
      <FooterContainer>
        <ButtonStart onPress={() => navigation.navigate('Verification')}>
          <TextStart>Start Using</TextStart>
        </ButtonStart>
        <Information3>By clicking start you agree to our</Information3>
        <ButtonPrivacyPolicy>
          <TextPrivacyPolicy>Privacy Policy and terms</TextPrivacyPolicy>
        </ButtonPrivacyPolicy>
      </FooterContainer>
    </Container>
  );
}

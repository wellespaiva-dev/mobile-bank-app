import React from 'react';
import {
  Container,
  Logo,
  ContainerText,
  Texto1,
  Texto2,
  ButtonCreateAccount,
  TextCreateAccount,
  ButtonLogin,
  TextLogin,
} from './styles';

export default function SignIn({navigation}: any) {
  return (
    <Container>
      <Logo source={require('../../assets/logo.png')} />
      <ContainerText>
        <Texto1>Let´s get started</Texto1>
        <Texto2>Never a better time than now to start</Texto2>
        <Texto2>Thinking about how you manage</Texto2>
        <Texto2>all your finances whith ease</Texto2>
      </ContainerText>
      <ButtonCreateAccount onPress={() => navigation.navigate('CreateAccount')}>
        <TextCreateAccount>Create account</TextCreateAccount>
      </ButtonCreateAccount>
      <ButtonLogin>
        <TextLogin>Login to Account</TextLogin>
      </ButtonLogin>
    </Container>
  );
}

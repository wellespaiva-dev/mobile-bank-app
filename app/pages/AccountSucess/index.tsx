import React from 'react';
import {Container, Information, Title, ButtonStart, TextStart} from './styles';
import SvgSucess from '../../assets/svg/SvgSucess';

export default function AccountSucess({navigation}: any) {
  return (
    <Container>
      <SvgSucess width={120} height={120} />
      <Title>Success!</Title>
      <Information>
        You have successfully registered in our app and can start working in it
      </Information>
      <ButtonStart onPress={() => navigation.navigate('SignIn')}>
        <TextStart>Start using</TextStart>
      </ButtonStart>
    </Container>
  );
}

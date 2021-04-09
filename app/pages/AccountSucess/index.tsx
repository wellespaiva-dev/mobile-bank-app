import React from 'react';
import {Container, Information, Title, ButtonStart, TextStart} from './styles';
import SvgSucess2 from '../../assets/SvgSucess2';

export default function AccountSucess({navigation}: any) {
  return (
    <Container>
      <SvgSucess2 width={120} height={120} />
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

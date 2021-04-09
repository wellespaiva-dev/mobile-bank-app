import React from 'react';
import {Container, Input, TitleInput} from './styles';

export default function FormInformationPessoal() {
  return (
    <Container>
      <TitleInput>Enter your email</TitleInput>
      <Input keyboardType="email-address" maxLength={31} />
      <TitleInput>Enter your name and surname</TitleInput>
      <Input maxLength={50} />
      <TitleInput>Date for birth</TitleInput>
      <Input maxLength={10} />
      <TitleInput>Enter your password</TitleInput>
      <Input secureTextEntry={true} maxLength={20} />
    </Container>
  );
}

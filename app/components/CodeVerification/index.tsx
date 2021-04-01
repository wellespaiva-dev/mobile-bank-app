import React, {useRef, useState} from 'react';
import {Container, InputCode} from './styles';

export default function CodeVerification() {
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');

  let refSecondInput = useRef();
  let refThirdInput = useRef();
  let refBredoomInput = useRef();

  return (
    <Container>
      <InputCode
        placeholder="0"
        focusable
        keyboardType="numeric"
        maxLength={1}
        selectionColor="#2573D5"
        isFocused
        returnKeyType="next"
        onChangeText={value => {
          setCode1(value);
          refSecondInput.focus();
        }}
        onSubmitEditing={() => {
          refSecondInput.focus();
        }}
      />

      <InputCode
        ref={ref => {
          refSecondInput = ref;
        }}
        placeholder="0"
        focusable
        keyboardType="numeric"
        maxLength={1}
        selectionColor="#2573D5"
        isFocused
        returnKeyType="next"
        onChangeText={value => {
          setCode2(value);
          refThirdInput.focus();
        }}
        onSubmitEditing={() => {
          refThirdInput.focus();
        }}
      />
      <InputCode
        ref={ref => {
          refThirdInput = ref;
        }}
        placeholder="0"
        focusable
        keyboardType="numeric"
        maxLength={1}
        selectionColor="#2573D5"
        isFocused
        returnKeyType="next"
        onChangeText={value => {
          setCode4(value);
          refBredoomInput.focus();
        }}
        onSubmitEditing={() => {
          refBredoomInput.focus();
        }}
      />
      <InputCode
        ref={ref => {
          refBredoomInput = ref;
        }}
        placeholder="0"
        focusable
        keyboardType="numeric"
        maxLength={1}
        selectionColor="#2573D5"
        isFocused
        returnKeyType="done"
      />
    </Container>
  );
}

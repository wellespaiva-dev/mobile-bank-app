import React from 'react';
import {Container} from './styles';
import PhoneInput from 'react-native-phone-number-input';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

interface Props {
  onChangeText: (text: string) => void;
  onChangeFormattedValue: (text: string) => void;
  defaultValue: string;
}

export default function CountrySelect({
  onChangeText,
  onChangeFormattedValue,
  defaultValue,
}: Props) {
  return (
    <Container>
      <PhoneInput
        defaultValue={defaultValue}
        defaultCode="BR"
        layout="first"
        onChangeText={onChangeText}
        onChangeFormattedText={onChangeFormattedValue}
        withShadow
        autoFocus
        placeholder="Número de telefone"
        containerStyle={{borderRadius: 10, height: 80, width: width - 40}}
        textContainerStyle={{
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          height: 80,
        }}
        textInputStyle={{
          fontSize: 16,
          fontFamily: 'Poppins-SemiBold',
          color: '#29304D',
        }}
        codeTextStyle={{
          fontSize: 15,
          fontFamily: 'Poppins-SemiBold',
          color: '#29304D',
          marginTop: 3,
        }}
      />
    </Container>
  );
}

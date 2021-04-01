import React, {useState} from 'react';
import {Container} from './styles';
import PhoneInput from 'react-native-phone-number-input';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default function CountrySelect() {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  return (
    <Container>
      <PhoneInput
        defaultValue={value}
        defaultCode="BR"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
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
          fontSize: 16,
          fontFamily: 'Poppins-SemiBold',
          color: '#29304D',
        }}
      />
    </Container>
  );
}

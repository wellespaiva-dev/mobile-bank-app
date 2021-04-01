import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #f7f9fc;
`;

export const Logo = styled.Image`
  width: 300px;
  height: 160px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ContainerText = styled.View`
  flex: 1;
  align-items: center;
`;

export const Texto1 = styled.Text`
  font-size: 27px;
  font-family: 'Poppins-SemiBold';
  color: #29304d;
`;

export const Texto2 = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #29304d;
`;

export const ButtonCreateAccount = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${width - 30}px;
  height: 50px;
  background: #2573d5;
  border-radius: 8px;
`;

export const TextCreateAccount = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 15px;
  color: #fff;
`;

export const ButtonLogin = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${width - 30}px;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const TextLogin = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 15px;
  color: #2573d5;
`;

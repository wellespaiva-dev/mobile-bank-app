import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import colors from '../../assets/colors';

const {width} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: ${colors.lightGray};
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
  color: ${colors.darkGray};
`;

export const Texto2 = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: ${colors.darkGray};
`;

export const ButtonCreateAccount = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${width - 30}px;
  height: 50px;
  background: ${colors.blue};
  border-radius: 8px;
`;

export const TextCreateAccount = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 15px;
  color: ${colors.white};
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
  color: ${colors.blue};
`;

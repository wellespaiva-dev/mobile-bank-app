import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../assets/colors';

const {width} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.lightGray};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 40px;
  font-size: 25px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.darkGray};
`;

export const Information = styled.Text`
  font-size: 15px;
  font-family: 'Poppins-Medium';
  color: ${colors.darkGray};
  text-align: center;
  width: ${width - 70}px;
`;

export const ButtonStart = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${width - 30}px;
  height: 50px;
  background: ${colors.blue};
  border-radius: 8px;
  position: absolute;
  bottom: 30px;
`;

export const TextStart = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 15px;
  color: ${colors.white};
`;

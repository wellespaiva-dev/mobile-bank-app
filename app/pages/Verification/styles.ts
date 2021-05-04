import styled from 'styled-components/native';
import colors from '../../assets/colors';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.lightGray};
`;

export const Back = styled.TouchableOpacity`
  padding: 30px;
`;

export const CardContainer = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: ${colors.darkGray};
  font-family: 'Poppins-SemiBold';
`;

export const Information = styled.Text`
  font-size: 13px;
  font-family: 'Poppins-Medium';
  color: ${colors.darkGray};
`;

export const FooterContainer = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: ${height / 1.2}px;
`;

export const ButtonContinue = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${width - 30}px;
  height: 50px;
  background: ${colors.blue};
  border-radius: 8px;
`;

export const TextContinue = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 15px;
  color: ${colors.white};
`;

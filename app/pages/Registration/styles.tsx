import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #f7f9fc;
`;

export const Back = styled.TouchableOpacity`
  padding: 30px;
`;

export const CardContainer = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 27px;
  color: #29304d;
  font-family: 'Poppins-SemiBold';
`;

export const Information = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: #29304d;
`;

export const Information2 = styled.Text`
  margin-top: 30px;
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #29304d;
`;

export const FooterContainer = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: ${height / 1.3}px;
`;

export const ButtonStart = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${width - 30}px;
  height: 50px;
  background: #2573d5;
  border-radius: 8px;
`;

export const TextStart = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 15px;
  color: #fff;
`;

export const Information3 = styled.Text`
  margin-top: 12px;
  font-size: 11px;
  font-family: 'Poppins-Medium';
  color: #29304d;
`;

export const ButtonPrivacyPolicy = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #2573d5;
  margin-bottom: 2px;
`;

export const TextPrivacyPolicy = styled.Text`
  font-size: 11px;
  font-family: 'Poppins-Medium';
  color: #2573d5;
`;

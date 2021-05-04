import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import colors from '../../assets/colors';

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
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: ${colors.darkGray};
`;

export const Information2 = styled.Text`
  margin-top: 30px;
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: ${colors.darkGray};
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
  background: ${colors.blue};
  border-radius: 8px;
`;

export const TextStart = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 15px;
  color: ${colors.white};
`;

export const Information3 = styled.Text`
  margin-top: 12px;
  font-size: 11px;
  font-family: 'Poppins-Medium';
  color: ${colors.darkGray};
`;

export const ButtonPrivacyPolicy = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${colors.blue};
  margin-bottom: 2px;
`;

export const TextPrivacyPolicy = styled.Text`
  font-size: 11px;
  font-family: 'Poppins-Medium';
  color: ${colors.darkGray};
`;

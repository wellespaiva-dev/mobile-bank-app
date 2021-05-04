import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import colors from '../../assets/colors';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  margin-top: 10px;
`;
export const TitleInput = styled.Text`
  font-size: 13px;
  font-family: 'Poppins-Medium';
  color: ${colors.textColor};
  opacity: 0.6;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  width: ${width - 60}px;
  height: 40px;
  background: ${colors.white};
  margin-top: 10px;
  border-radius: 8px;
  border-color: ${colors.textColor};
  align-items: flex-start;
  justify-content: center;
  font-family: 'Poppins-Regular';
  font-size: 13px;
  color: ${colors.textColor};
  padding: 0 10px;
  border-width: 0.6px;
  border-color: rgba(0, 0, 0, 0.1);
`;

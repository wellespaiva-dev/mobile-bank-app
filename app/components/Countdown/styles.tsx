import styled from 'styled-components/native';
import colors from '../../assets/colors';

export const Container = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const TimeInformation = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: ${colors.blue};
  margin-right: 5px;
`;

export const Time = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: ${colors.blue};
`;

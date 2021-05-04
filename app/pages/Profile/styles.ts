import styled from 'styled-components/native';
import colors from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.darkGray};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.white};
`;

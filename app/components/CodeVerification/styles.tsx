import styled from 'styled-components/native';
import colors from '../../assets/colors';

export const Container = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;

export const InputCode = styled.TextInput`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  color: ${colors.darkGray};
  font-family: 'Poppins-SemiBold';
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: ${colors.white};
  border-color: rgba(0, 0, 0, 0.1);
  border-width: 0.6px;
  margin-right: 15px;
  padding: 5px 10px;
`;

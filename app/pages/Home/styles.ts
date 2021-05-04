import styled from 'styled-components/native';
import colors from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.darkGray};
`;

export const TopContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0 20px;
`;

export const Balance = styled.Text`
  font-size: 27px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.white};
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonNotification = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

export const PhotoProfile = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  margin-left: 15px;
  border-width: 0.6px;
  border-color: ${colors.white};
`;

export const CardContainer = styled.View`
  flex: 1;
  background: ${colors.lightGray};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const SubTitle = styled.Text`
  color: ${colors.lightGray};
  font-size: 12px;
  font-family: 'Poppins-Medium';
  padding: 0 20px;
  opacity: 0.6;
  margin-top: -5px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  padding: 10px 30px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonTransaction = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
`;

export const TransactionInformation = styled.Text`
  color: ${colors.lightGray};
  font-size: 12px;
  font-family: 'Poppins-Medium';
  opacity: 0.6;
  margin-top: 5px;
`;

export const InformationContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Information = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.darkGray};
`;

export const ButtonAdd = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const TextAdd = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.blue};
`;

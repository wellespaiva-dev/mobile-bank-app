import styled from 'styled-components/native';
import colors from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.darkGray};
`;

export const SecondContainer = styled.View`
  flex: 1;
  background: ${colors.lightGray};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: 10px;
`;

export const TitleContainer = styled.View`
  padding: 20px 25px;
`;

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 27px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.darkGray};
`;

export const Information = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.darkGray};
  opacity: 0.4;
  margin-top: -10px;
`;

export const ButtonMais = styled.TouchableOpacity`
  padding: 0 25px 0 0;
`;

export const TextButtonMais = styled.Text`
  font-size: 30px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.darkGray};
  margin-top: -15px;
`;

export const MapContainer = styled.View`
  flex: 1;
  margin-top: -15px;
  padding: 0 1.5px;
  margin-bottom: 10px;
`;

export const MarkerImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${colors.white};
`;

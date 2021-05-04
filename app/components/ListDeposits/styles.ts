import styled from 'styled-components/native';
import colors from '../../assets/colors';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
`;

export const ListContainer = styled.View`
  height: 150px;
  width: ${width - 30}px;
  background: ${colors.white};
  border-radius: 10px;
  border-width: 0.6px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const List = styled.FlatList`
  flex: 1;
`;

export const CardContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 75px;
`;

export const View1Container = styled.View`
  flex-direction: row;
  padding: 0 10px;
`;

export const PhotoContainer = styled.View`
  width: 40px;
  height: 40px;
  background: ${colors.lightGray};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const InformationContainer = styled.View`
  margin-left: 5px;
`;

export const TypeInformation = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.darkGray};
`;

export const Information = styled.Text`
  font-size: 11px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.textColor};
  opacity: 0.6;
`;

export const View2Container = styled.View`
  padding: 0 10px;
  align-items: flex-end;
`;

export const Value = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.darkGray};
`;

export const Date = styled.Text`
  font-size: 11px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.textColor};
  opacity: 0.6;
`;

export const Line = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const BorderLine = styled.View`
  border-bottom-width: 0.6px;
  border-color: rgba(0, 0, 0, 0.1);
  width: 97%;
`;

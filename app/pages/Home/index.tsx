import React from 'react';
import colors from '../../assets/colors';
import {
  Container,
  TopContainer,
  ButtonNotification,
  Balance,
  PhotoProfile,
  ProfileContainer,
  CardContainer,
  SubTitle,
  ButtonsContainer,
  ButtonTransaction,
  ButtonContainer,
  TransactionInformation,
  InformationContainer,
  Information,
  ButtonAdd,
  TextAdd,
} from './styles';
import SvgResquet from '../../assets/svg/SvgRequest';
import SvgChange from '../../assets/svg/SvgChange';
import SvgNotification from '../../assets/svg/SvgNotification';
import SvgSend from '../../assets/svg/SvgSend';
import SvgHistory from '../../assets/svg/SvgHistory';
import ListCards from '../../components/ListCards';
import ListDepositos from '../../components/ListDeposits';

const dados = [
  {
    bank: 1,
    information: 'Visa Master',
    type: '**7645',
    value: '20000.00',
    date: '01/23',
  },
  {
    bank: 2,
    information: 'Mastercard',
    type: '**4505',
    value: '589.00',
    date: '01/22',
  },
];

const dados2 = [
  {
    id: 1,
    information: 'For 5 years',
    type: '22.05.2022',
    value: '1524.00',
    date: 'Rate 2%',
  },
  {
    id: 2,
    information: 'For 10 years',
    type: '13.02.2027',
    value: '10324.00',
    date: 'Rate 5%',
  },
];

export default function Home() {
  return (
    <Container>
      <TopContainer>
        <Balance>$2,589.00</Balance>
        <ProfileContainer>
          <ButtonNotification>
            <SvgNotification fill={colors.white} width={20} height={20} />
          </ButtonNotification>
          <PhotoProfile source={require('../../assets/profile.jpeg')} />
        </ProfileContainer>
      </TopContainer>
      <SubTitle>Available Balance</SubTitle>
      <ButtonsContainer>
        <ButtonContainer>
          <ButtonTransaction>
            <SvgSend width={30} height={30} />
          </ButtonTransaction>
          <TransactionInformation>Send</TransactionInformation>
        </ButtonContainer>
        <ButtonContainer>
          <ButtonTransaction>
            <SvgResquet width={30} height={30} />
          </ButtonTransaction>
          <TransactionInformation>Resquest</TransactionInformation>
        </ButtonContainer>
        <ButtonContainer>
          <ButtonTransaction>
            <SvgHistory width={30} height={30} />
          </ButtonTransaction>
          <TransactionInformation>History</TransactionInformation>
        </ButtonContainer>
        <ButtonContainer>
          <ButtonTransaction>
            <SvgChange width={30} height={30} />
          </ButtonTransaction>
          <TransactionInformation>Change</TransactionInformation>
        </ButtonContainer>
      </ButtonsContainer>
      <CardContainer>
        <InformationContainer>
          <Information>Your Cards</Information>
          <ButtonAdd>
            <TextAdd>Add</TextAdd>
          </ButtonAdd>
        </InformationContainer>
        <ListCards dados={dados} />
        <InformationContainer>
          <Information>Deposits</Information>
          <ButtonAdd>
            <TextAdd>Add</TextAdd>
          </ButtonAdd>
        </InformationContainer>
        <ListDepositos dados={dados2} />
      </CardContainer>
    </Container>
  );
}

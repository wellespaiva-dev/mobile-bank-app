import React, {useState} from 'react';
import SvgMasterCard from '../../assets/svg/SvgMasterCard';
import SvgVisa from '../../assets/svg/SvgVisa';
import {
  Container,
  ListContainer,
  List,
  CardContainer,
  View1Container,
  PhotoContainer,
  InformationContainer,
  TypeInformation,
  Information,
  View2Container,
  Value,
  Date,
  Line,
  BorderLine,
} from './styles';

interface Card {
  bank: number;
  information: string;
  type: string;
  dalue: string;
  date: string;
}

export default function ListCards({dados}: any) {
  const [data] = useState<Card[]>(dados);

  return (
    <Container>
      <ListContainer>
        <List
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}: any) => (
            <>
              <CardContainer key={item.bank}>
                <View1Container>
                  <PhotoContainer>
                    {item.bank === 1 && <SvgVisa width={25} height={25} />}
                    {item.bank === 2 && (
                      <SvgMasterCard width={25} height={25} />
                    )}
                  </PhotoContainer>
                  <InformationContainer>
                    <TypeInformation>{item.information}</TypeInformation>
                    <Information>{item.type}</Information>
                  </InformationContainer>
                </View1Container>
                <View2Container>
                  <Value>${item.value}</Value>
                  <Date>{item.date}</Date>
                </View2Container>
              </CardContainer>
              <Line>
                <BorderLine />
              </Line>
            </>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ListContainer>
    </Container>
  );
}

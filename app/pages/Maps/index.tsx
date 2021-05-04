import React, {useEffect, useState} from 'react';
import {
  Container,
  SecondContainer,
  TopContainer,
  TitleContainer,
  Title,
  Information,
  ButtonMais,
  TextButtonMais,
  MapContainer,
  MarkerImage,
} from './styles';
import MapboxGL from '@react-native-mapbox-gl/maps';
import GetLocation from 'react-native-get-location';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoid2VsbGVzcGFpdmEiLCJhIjoiY2tua2lscnEwMDl0NjJwbW8zeTY4bnRxayJ9.-6-xmSJxMAoeDO-F6OOUPA',
);

export default function Maps() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        //console.log(location);
        setLatitude(location.latitude);
        setLongitude(location.longitude);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  return (
    <Container>
      <SecondContainer>
        <TopContainer>
          <TitleContainer>
            <Title>Find ATM</Title>
            <Information>Find the nearest ATM to you</Information>
          </TitleContainer>
          <ButtonMais>
            <TextButtonMais>...</TextButtonMais>
          </ButtonMais>
        </TopContainer>
        <MapContainer>
          <MapboxGL.MapView
            styleURL={MapboxGL.StyleURL.Street}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{flex: 1, zIndex: -1}}>
            <MapboxGL.Camera
              centerCoordinate={[longitude, latitude]}
              zoomLevel={16}
            />
            <MapboxGL.PointAnnotation coordinate={[longitude, latitude]}>
              <MarkerImage source={require('../../assets/profile.jpeg')} />
            </MapboxGL.PointAnnotation>
            <MapboxGL.MarkerView coordinate={[longitude, latitude]}>
              <MarkerImage source={require('../../assets/profile.jpeg')} />
            </MapboxGL.MarkerView>
          </MapboxGL.MapView>
        </MapContainer>
      </SecondContainer>
    </Container>
  );
}

import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Container, Maps} from './styles';
import Geolocation from '@react-native-community/geolocation';
import Search from '../Search';
import Directions from '../Directions';

export default function Map() {
  const [region, setRegion] = useState(null);
  const [destination, setDestination] = useState(null);
  useEffect(() => {
    function getPosition() {
      Geolocation.getCurrentPosition(
        ({coords: {latitude, longitude}}) => {
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.0134,
            longitudeDelta: 0.0134,
          });
          console.log(latitude, longitude);
        }, // success
        () => {},
        {
          timeout: 2000,
          enableHighAccuracy: true,
          maximumAge: 1000,
        },
      );
    }
    getPosition();
  }, []);

  function onLocationSelected(data, {geometry}) {
    const {
      location: {lat: latitude, lng: longitude},
    } = geometry;
    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text,
    });
    console.log(region);
  }
  return (
    <Container>
      <Maps region={region} loadingEnabled showsUserLocation>
        {destination && (
          <Directions
            origin={region}
            destination={destination}
            onReady={() => {}}
          />
        )}
      </Maps>
      <Search onLocationSelected={onLocationSelected} />
    </Container>
  );
}

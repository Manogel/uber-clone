import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Map from '~/components/Map';
// import { Container } from './styles';

export default function Main() {
  const [region, setRegion] = useState({});
  useEffect(() => {
    async function getPosition() {
      navigator.geolocation.getCurrentPosition(
        ({coords: {latitude, longitude}}) => {
          setRegion({latitude, longitude});
        },
        () => {},
        {
          timeout: 2000,
          enableHighAccuracy: true,
          maximumAge: 1000,
        },
      );
    }
    //getPosition()
  }, []);
  return <Map />;
}

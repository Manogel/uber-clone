import React from 'react';
import {View} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
// import { Container } from './styles';

export default function Directions({destination, origin, onReady}) {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey="AIzaSyDkUI2f5wkf8MuAV_BgLjfsqbYfIlulJfQ"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
}

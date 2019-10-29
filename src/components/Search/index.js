import React, {useState} from 'react';
import {Platform} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import { Container } from './styles';

export default function Search({onLocationSelected}) {
  return (
    <GooglePlacesAutocomplete
      placeholder="Para onde?"
      onPress={onLocationSelected}
      query={{
        key: 'AIzaSyDkUI2f5wkf8MuAV_BgLjfsqbYfIlulJfQ',
        language: 'pt',
      }}
      textInputProps={{
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      fetchDetails
      placeholderTextColor="#333"
      styles={{
        container: {
          position: 'absolute',
          width: '100%',
          top: Platform.OS === 'ios' ? 60 : 40,
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          heigth: 54,
          marginHorizontal: 20,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          height: 54,
          margin: 0,
          borderRadius: 0,
          paddingTop: 0,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 0,
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          borderWidth: 1,
          borderColor: '#ddd',
          fontSize: 18,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {x: 0, y: 0},
          shadowRadius: 15,
        },
        listView: {
          borderWidth: 1,
          borderColor: '#ddd',
          backgroundColor: '#fff',
          marginHorizontal: 20,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {x: 0, y: 0},
          shadowRadius: 15,
          marginTop: 20,
        },
        description: {
          fontSize: 16,
          paddingBottom: 0,
        },
        row: {
          padding: 20,
          height: 60,
        },
      }}
      enabledPoweredByContainer={false}
    />
  );
}

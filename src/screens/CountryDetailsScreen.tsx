import React from 'react';
import { View, Text } from 'react-native';
import OpenStreetMap from 'react-native-open-street-map';

const CountryDetailsScreen = ({ route }: any) => {
  const { country } = route.params;

  return (
    <View>
      <Text>{country.name.common}</Text>
      <Text>Región: {country.region}</Text>
      <OpenStreetMap
        latitude={country.latlng[0]}
        longitude={country.latlng[1]}
        zoom={6}
        style={{ height: 300 }}
      />
    </View>
  );
};

export default CountryDetailsScreen;
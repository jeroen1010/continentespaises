import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const CountryCard = ({ country, onPress }: any) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Image source={{ uri: country.flags.png }} style={{ width: 50, height: 30 }} />
      <Text>{country.name.common}</Text>
      <Text>Capital: {country.capital[0]}</Text>
      <Text>Lengua: {Object.values(country.languages || {}).join(', ')}</Text>
    </View>
  </TouchableOpacity>
);

export default CountryCard;
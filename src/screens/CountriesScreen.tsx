import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import CountryCard from '../components/CountryCard';
import { fetchCountriesByContinent } from '../utils/api';

const CountriesScreen = ({ route, navigation }: any) => {
  const { continent } = route.params;
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountriesByContinent(continent).then(setCountries);
  }, [continent]);

  return (
    <View>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.name.common}
        renderItem={({ item }) => (
          <CountryCard country={item} onPress={() => navigation.navigate('CountryDetails', { country: item })} />
        )}
      />
    </View>
  );
};

export default CountriesScreen;
import { useEffect, useState } from 'react';
import { useGetAllCountriesQuery } from '../api/countriesApi';
import { CountriesAttributes } from '../config/entities/countryAttributes';

const useContinents = () => {
  const { data: countries, error, isLoading } = useGetAllCountriesQuery();
  const [continents, setContinents] = useState<string[] | null>(null);

  useEffect(() => {
    if (countries) {
      const continentsList = [...new Set(countries.map((country: CountriesAttributes) => country.region))];
      setContinents(continentsList);
    }
  }, [countries]);

  return { continents, error, isLoading };
};

export default useContinents;
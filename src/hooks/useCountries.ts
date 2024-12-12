import { useEffect, useMemo, useState } from 'react';
import { useGetAllCountriesQuery } from '../api/countriesApi';
import { CountriesAttributes } from '../config/entities/countryAttributes';

const useCountries = (continent: string) => {
    const { data: countries, error, isLoading } = useGetAllCountriesQuery();
  
    const filteredCountries = useMemo(() => {
      if (countries) {
        return countries.filter((country: CountriesAttributes) => country.region === continent);
      }
      return [];
    }, [countries, continent]);
  
    return { countries: filteredCountries, error, isLoading };
  };
  
  export default useCountries;
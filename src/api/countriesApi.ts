import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CountriesAttributes } from "../config/entities/countryAttributes";
import { DataCountry } from "../config/responses/dataCountry";
import { countryMapper } from "../config/mapper/countryMapper";

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<CountriesAttributes[], void>({
      query: () => 'all',
      transformResponse: (response: DataCountry[]) => response.map(countryMapper),
    }),
    
    getCountriesByContinent: builder.query<CountriesAttributes[], string>({
      query: (continent) => `region/${continent}`,
      transformResponse: (response: DataCountry[]): CountriesAttributes[] => {
        return response.map(countryMapper);
      },
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountriesByContinentQuery } = countriesApi;
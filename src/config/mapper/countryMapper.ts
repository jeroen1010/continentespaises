import { CountriesAttributes } from "../entities/countryAttributes";
import { DataCountry } from "../responses/dataCountry";


export const countryMapper = (item : DataCountry) : CountriesAttributes => {
    return {
        name: {
            common: item.name.common,
            official: item.name.official
        },
        cca3: item.cca3,
        region: item.region, 
        capital: item.capital ?? [],     
        languages: item.languages ?? {},
        population: item.population,
        latlng: item.latlng,
        flags: {
            png: item.flags.png
        }
    }
}
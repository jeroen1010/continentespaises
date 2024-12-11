import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContinentsScreen from '../screens/ContinentsScreen';
import CountriesScreen from '../screens/CountriesScreen';
import CountryDetailsScreen from '../screens/CountryDetailsScreen';

const Stack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Continents" component={ContinentsScreen} />
      <Stack.Screen name="Countries" component={CountriesScreen} />
      <Stack.Screen name="CountryDetails" component={CountryDetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
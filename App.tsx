import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ContinentScreen from './src/screens/ContinentScreen';
import CountryScreen from './src/screens/CountryScreen';
import CountryDetailsScreen from './src/screens/CountryDetailsScreen';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App(): React.JSX.Element {
    return (
        
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Continent" component={ContinentScreen} />
                <Stack.Screen name="Country" component={CountryScreen} />
            </Stack.Navigator>a
        </NavigationContainer>
        
    );
}

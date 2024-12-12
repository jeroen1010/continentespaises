import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native'


type CountryScreenProps = {
  navigation: NavigationProp<ParamListBase>;  
}

const CountryScreen = ( {navigation} : CountryScreenProps) => {
  return (
    <View>
    </View>
  )
}

export default CountryScreen

const styles = StyleSheet.create({})
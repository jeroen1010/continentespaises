import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

const continents = ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania'];

const ContinentsScreen = ({ navigation }: any) => (
  <View>
    <FlatList
      data={continents}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Countries', { continent: item })}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default ContinentsScreen;
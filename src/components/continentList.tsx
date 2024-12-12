import React from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import useContinents from '../hooks/useContinents';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type ContinentsListProps = {
  navigation: NavigationProp<ParamListBase>;
};
const ContinentsList = ( {navigation} : ContinentsListProps ) => {
  const { continents, isLoading } = useContinents();

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={continents}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('CountryDetails', { continent: item })}
      >
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
      )}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 16,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 20,
  },
});

export default ContinentsList;
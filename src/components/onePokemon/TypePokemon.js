import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { map, capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

const TypePokemon = ({types}) => {
  return (
    <View style={styles.content}>
      { map(types, (item, index) => (
        <View key={index} style={{...styles.styleTypePill, backgroundColor: getColorByPokemonType(item.type.name)}}>
          <Text>{ capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}

export default TypePokemon;

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  styleTypePill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10
  }
});

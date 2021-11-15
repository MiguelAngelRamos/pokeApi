import React from 'react'
import { StyleSheet, FlatList, Platform } from 'react-native'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <FlatList
      data={pokemons}
      keyExtractor={(pokemon) => pokemon.id.toString()}
      renderItem={({item}) => <PokemonCard pokemon={item} />} 
    />
  )
}

export default PokemonList

const styles = StyleSheet.create({})

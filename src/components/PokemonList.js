import React from 'react'
import { StyleSheet, FlatList, Platform, ActivityIndicator } from 'react-native'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons, loadPokemons, isNext }) => {

  const loadMore = () => {
    // console.log('Cargando más Pokemones');
    loadPokemons();
  }
  // console.log(pokemons);
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(pokemon) => pokemon.id.toString()}
      renderItem={({item}) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentStyle}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (<ActivityIndicator size="large" color="#AEAEAE" style={styles.spinner}/>)
      } 
      // onEndReached cuando estes a punto de llegar al final de la lista en la parte visible
    />
  )
}

export default PokemonList

const styles = StyleSheet.create({
  flatListContentStyle: {
    paddingHorizontal: 5
  },
  spinner:{
    flex: 1,
    marginTop: 20,
    marginBottom: Platform.OS === "android"? 90: 60
  }
})

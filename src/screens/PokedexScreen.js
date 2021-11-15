import React, { useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemonApi';

const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState([]); // el listado inicial de pokemones
  const [nextUrl, setNextUrl] = useState(null); // para el siguiente listado de poke

  useEffect( () => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = []; // los pokemones con los detalles

      for await ( const pokemon of response.results ) {
        console.log(pokemon.url)
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        console.log( pokemonDetails)

        // crear un objeto con las propiedades que nos interesan
        
      }

    
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text>PokedexScreen</Text>
    </View>
  )
}

export default PokedexScreen;

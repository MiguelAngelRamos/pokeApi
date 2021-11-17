import React, { useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemonApi';
import PokemonList from '../components/PokemonList';

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
        // console.log(pokemon.url)
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        // console.log(pokemonDetails)

        // crear un objeto con las propiedades que nos interesan
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })

      }
      // que tomes todos los pokemones que estan actualmente en el estado y luego añade apartir de los pokemones del "pokemonsArray"
      setPokemons([...pokemons, ...pokemonsArray]);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <PokemonList 
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
        />
    </View>
  )
}

export default PokedexScreen;

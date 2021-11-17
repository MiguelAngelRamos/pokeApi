import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native';
import { getPokemonDetailByIdApi } from '../api/pokemonApi';
import { View, Text } from 'react-native';
import TypePokemon from '../components/onePokemon/TypePokemon';
import Stats from '../components/onePokemon/Stats';
import Header from '../components/onePokemon/Header';


const OnePokemonScreen = ( props ) => {
  // console.log(props);
  const { navigation, route: { params } } = props;
  // console.log(params.id);
  const [pokemon, setPokemon] = useState(null);

  useEffect( ()=> {
    ( async()=> {
      try {
        const response = await getPokemonDetailByIdApi(params.id);
        console.log(response);
        setPokemon(response);
      } catch (error) {
        console.log(error);
      }
    })();
   
  },[params]);

 
  if(!pokemon) return null;

  return (
    <ScrollView>
      {/* Componente Header */}
      <Header 
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
      />
      {/* Componente type PokemonCard */}
      <TypePokemon types={pokemon.types} />
      {/* Componente Stats */}
      <Stats />
    </ScrollView>
  )
}

export default OnePokemonScreen;

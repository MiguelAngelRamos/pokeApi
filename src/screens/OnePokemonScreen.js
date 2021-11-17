import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native';
import { getPokemonDetailByIdApi } from '../api/pokemonApi';
import { View, Text } from 'react-native';


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

      {/* Componente type PokemonCard */}
      {/* Componente Stats */}

    </ScrollView>
  )
}

export default OnePokemonScreen;

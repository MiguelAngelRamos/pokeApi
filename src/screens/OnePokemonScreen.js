import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getPokemonDetailByIdApi } from '../api/pokemonApi';
import TypePokemon from '../components/onePokemon/TypePokemon';
import Stats from '../components/onePokemon/Stats';
import Header from '../components/onePokemon/Header';
import FavoritePokemon from '../components/onePokemon/FavoritePokemon';
import useAuth from '../hooks/useAuth';


const OnePokemonScreen = ( props ) => {
  // console.log(props);
  const { navigation, route: { params } } = props;
  // console.log(params.id);
  const [pokemon, setPokemon] = useState(null);

  const { auth } = useAuth();

  useEffect( () => {
    navigation.setOptions({
      headerRight: () => auth && <FavoritePokemon id={pokemon?.id} />,
      headerLeft: () => <Icon name="arrow-left" color='#fff' size={20} style={{ marginLeft: 20}} onPress={navigation.goBack}/>
    })
  }, [navigation, params, pokemon]) // cada vez que cambie el navigation y los parametros

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
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}

export default OnePokemonScreen;

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { capitalize } from 'lodash';
import getColorByPokemonType from '../utils/getColorByPokemonType';
import { useNavigation } from '@react-navigation/native';

const PokemonCard = ({ pokemon }) => {
  const navigation = useNavigation();
  const pokemonColor = getColorByPokemonType(pokemon.type);
  // console.log(pokemonColor);

  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles}
  // TouchableWithoutFeedBack todos los elementos que responden al feeback deben tener una respuesta visual cuando se tocan

  const goToPokemon = () => {
    navigation.navigate("OnePokemon", {id: pokemon.id})
  }
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image 
              source={{uri: pokemon.image}}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  bgStyles:{
    flex: 1,
    borderRadius: 15,
    padding: 10
  },
  number: {
    color: '#FFF',
    position: "absolute",
    right: 10,
    top: 10,
    fontSize: 11
  },
  name: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 15,
    paddingTop:10
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90
  }

})

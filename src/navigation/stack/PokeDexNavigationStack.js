import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../../screens/PokedexScreen';
import OnePokemonScreen from '../../screens/OnePokemonScreen';

const Stack = createStackNavigator();
const PokeDexNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Pokedex" 
      component={PokedexScreen}
      options={{title: "Pokedex"}}
      />
      <Stack.Screen
        name="OnePokemon"
        component={OnePokemonScreen}
        options={{ title: "", headerTransparent: true}} 
      />
    </Stack.Navigator>
  )
}

export default PokeDexNavigationStack

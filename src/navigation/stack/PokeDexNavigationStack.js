import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../../screens/PokedexScreen';

const Stack = createStackNavigator();
const PokeDexNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Pokedex" 
      component={PokedexScreen}
      options={{title: "Pokedex"}}
      />
    </Stack.Navigator>
  )
}

export default PokeDexNavigationStack

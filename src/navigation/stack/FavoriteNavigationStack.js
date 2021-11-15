import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../../screens/FavoriteScreen';

const Stack = createStackNavigator();
const FavoriteNavigationStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen 
      name="Favorite" 
      component={FavoriteScreen}
      options={{title: "Favoritos"}}
    />
  </Stack.Navigator>
  )
}

export default FavoriteNavigationStack

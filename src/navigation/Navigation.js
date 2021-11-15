import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

// stack 
import FavoriteNavigationStack from './stack/FavoriteNavigationStack';
import PokeDexNavigationStack from './stack/PokeDexNavigationStack';
import AccountNavigationStack from './stack/AccountNavigationStack';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="FavoriteScreen"
        component={FavoriteNavigationStack}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="PokedexScreen"
        component={PokeDexNavigationStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall()
        }}
      />

      <Tab.Screen 
        name="AccountScreen"
        component={AccountNavigationStack}
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size}/>
          )
        }}
      />

    </Tab.Navigator>
  )
}

export default Navigation;

const renderPokeBall = () => {
  return (
    <Image 
      source={require('../../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    />
  )
}

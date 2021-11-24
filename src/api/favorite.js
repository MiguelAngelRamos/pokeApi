import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from 'lodash';
import { FAVORITE_STORAGE } from '../utils/constants'; // nombre en el cual vamos a guardar y obtener del storage


// PARA OBTENER LOS POKEMONES FAVORITOS
export const getPokemonFavoriteApi = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response ? JSON.parse(response): [];
  } catch (error) {
    throw error;
  }
};

// PARA AÑADIR UN POKEMON AL STORAGE
export const addAPokemonFavoriteApi = async (id) => {
  try {
    // obtener los pokemones en el storage
    const favorites = await getPokemonFavoriteApi(); // dame los pokemones que tienes en la lista de favoritos
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

// PARA EVITAR TENER POKEMONES DUPLICADOS EN LOS FAVORITOS

export const isPokemonFavoriteApi = async (id) => {
  try {
    const response = await getPokemonFavoriteApi();
    return includes(response, id)// true o un false
  } catch (error) {
    throw error;
  }
}

// PARA BORRAR EL STORAGE
export const removePokemonFavoriteApi = async (id) => {
  // recuperamos de la lista de favoritos del storage

  try {
    const favorites = await getPokemonFavoriteApi();
    // vamos a usar la funcion pull de lodash para borrar un elemento con ese id
    const newFavorites = pull(favorites, id);
    // nos va a devolver un array pero con el id eliminado de la lista de favoritos
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSO.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}
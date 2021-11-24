import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { addAPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi} from '../../api/favorite';

const FavoritePokemon = ({id}) => {
  const [isFavorite, setIsFavorite] = useState(undefined); // por que aun no sabemos que pokemon, esta en favoritos
  const [reloadCheck, setReloadCheck] = useState(false); // bandera 
  const Icon = isFavorite? FontAwesome: FontAwesome5;

  useEffect( () => {
   ( async() => {
     try {
       const response = await isPokemonFavoriteApi(id);
       console.log('el response es: ', response);
       setIsFavorite(response);
     } catch (error) {
       throw error;
     }
   })()
  }, [id, reloadCheck]);

  const onRealoadCheckFavorite = () => {
    setReloadCheck( (estado) => !estado );
  };

  const addFavorite = async () => {
    try {
      await addAPokemonFavoriteApi(id);
      onRealoadCheckFavorite();
    } catch (error) {
      throw error;
    }
  }

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      onRealoadCheckFavorite();
    } catch (error) {
      throw error;
    }
  }

  return (
    <Icon 
      name="heart"
      color="#FFF"
      size={20}
      onPress={isFavorite? removeFavorite: addFavorite}
      style={{ marginRight: 20 }}
    />
  )
}

export default FavoritePokemon

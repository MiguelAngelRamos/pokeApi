import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

const Header = ({ name, order, image, type }) => {
 const color = getColorByPokemonType(type); 
 const bgStyle = [{ backgroundColor: color, ...styles.bg}];

  return (
    <>
      <View style={bgStyle}>
        <SafeAreaView style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.name}>{capitalize(name)}</Text>
            <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
          </View>

          <View style={styles.contentImg}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        </SafeAreaView>
      </View>
    </>
  )
}

export default Header;

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 400,
    // position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    // transform: [{ scaleX: 2}]
  },
  contentImg: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    top: 30
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain'
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40
  },
  order: {
    color: "#FFF",
    fontWeight: 'bold'
  }
});

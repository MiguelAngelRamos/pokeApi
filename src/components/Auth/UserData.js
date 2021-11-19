import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import useAuth from '../../hooks/useAuth';

const UserData = () => {
  const { auth, logout } = useAuth();
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre: " text={`${auth.firstName} ${auth.lastName}`}/>
        <ItemMenu title="Username: " text={`${auth.username}`}/>
        <ItemMenu title="Email: " text={`${auth.email} `}/>
      </View>

      <Button title="Cerrar Sesion" onPress={logout} />
    </View>
  )
}

const ItemMenu = ({title, text }) => {
  return (
    <View style={styles.ItemMenu}>
      <Text style={styles.ItemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  titleBlock: {
    marginBottom: 30
  },
  ItemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1, 
    borderColor: "#CFCFCF"
  },
  ItemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120
  }

  
})

export default UserData;
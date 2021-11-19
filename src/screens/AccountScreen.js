import React from 'react'
import { View, Text } from 'react-native'
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';

const AccountScreen = () => {
  const auth = false;
  return (
    <View>
      { auth ? <UserData /> : <LoginForm />}
    </View>
  )
}

export default AccountScreen

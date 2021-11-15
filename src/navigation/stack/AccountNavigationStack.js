import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../../screens/AccountScreen';

const Stack = createStackNavigator();

const AccountNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Account" 
      component={AccountScreen}
      options={{title: "Account"}}
      />
    </Stack.Navigator>
  )
}

export default AccountNavigationStack;

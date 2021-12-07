import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Auth from '../screens/Auth'

// Tem aluma coisa de errado nas rotas!!!

const Stack = createStackNavigator();

export default props =>{
     return(
          <NavigationContainer>
               <Stack.Navigator initialRouteName='Auth'>
                    <Stack.Screen name='Auth' component={Auth}/>
               </Stack.Navigator>
          </NavigationContainer>
     )
}
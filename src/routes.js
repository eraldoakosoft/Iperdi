import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './views/Login'
import Cadastro from './views/Cadastro'

const Stack = createStackNavigator()

function Routes(){
    return(
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastro' component={Cadastro}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
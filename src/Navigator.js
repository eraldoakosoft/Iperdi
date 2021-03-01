import React, {useEffect} from 'react'
import {BackHandler, Alert} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icons from 'react-native-vector-icons/Ionicons'

import Login from './views/Login'
import Cadastro from './views/Cadastro'
import Home from './views/Home'
import FeedChat from './views/FeedChat'
import Perfil from './views/Perfil'
import Add from './views/Add'


const Stack = createStackNavigator()

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Tab = createBottomTabNavigator()

function MyTabs() {

    useEffect( () => {
        const backAction = () => {
            Alert.alert('Alerta!', 'Deseja realmente sair do App?', [
                {
                    text: 'Não',
                    onPress: ()=> null,
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => {
                        BackHandler.exitApp() 
                    }
                }
            ])
            return true
        }

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
        return () => backHandler.remove()

    },[] )

    return (
        <Tab.Navigator  tabBarOptions={ { style:{ backgroundColor: '#FFF' }, activeBackgroundColor: '#009FE3', activeTintColor: '#FFF' } } >
            <Tab.Screen
                name="Chat"
                component={FeedChat}
                options={{
                    tabBarIcon: () => <Icons name="chatbubbles-outline" size={30} color="#2F2F2F" />
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => <Icons name="home-outline" size={30} color="#2F2F2F" />
                }}
            />
            <Tab.Screen
                name="Adicionar"
                component={Add}
                options={{
                    tabBarIcon: () => <Icons name="add-circle-outline" size={30} color="#2F2F2F" />
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: () => <Icons name="person-outline" size={30} color="#2F2F2F" />,
                    color: "#2F2F2F"
                }}
            />

        </Tab.Navigator>
    )
}

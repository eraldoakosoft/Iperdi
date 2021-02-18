import React from 'react'
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
    return (
        <Tab.Navigator  tabBarOptions={{  activeTintColor: "#040404" }}>
            <Tab.Screen
                name="Chat"
                component={FeedChat}
                options={{
                    tabBarIcon: () => <Icons name="chatbubbles" size={30} color="#2F2F2F" />
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => <Icons name="home" size={30} color="#2F2F2F" />
                }}
            />
            <Tab.Screen
                name="Adicionar"
                component={Add}
                options={{
                    tabBarIcon: () => <Icons name="add-circle" size={30} color="#2F2F2F" />
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: () => <Icons name="person" size={30} color="#2F2F2F" />,
                    color: "#2F2F2F"
                }}
            />

        </Tab.Navigator>
    )
}

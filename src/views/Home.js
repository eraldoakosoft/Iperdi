import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../components/Header'
import CardHome from '../components/CardHome'

export default function Home({navigation}) {
    const post = [
        {
            user: 'Eraldo',
            avatarUrl: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png',
            horarioPostagem: 'Há 1 minuto',
            foto: require('../assets/img/cnh.jpg'),
            nome: 'Lince da Silva',
            recompensa: '30,00',
            cidade: 'Americana-SP'
        },
        {
            user: 'Bruno Pigatto',
            avatarUrl: 'https://cdn.pixabay.com/photo/2018/04/28/13/18/man-3357275_960_720.png',
            horarioPostagem: 'Há 1 dia',
            foto: require('../assets/img/crlv.jpg'),
            nome: 'Tony Stark',
            recompensa: '20,00',
            cidade: 'Varginha-MG'
        },
        {
            user: 'Danizinha',
            avatarUrl: 'https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804_960_720.png',
            horarioPostagem: 'Há 2 dias',
            foto: require('../assets/img/cred_card.jpg'),
            nome: 'Tony Stark',
            recompensa: '200,00',
            cidade: 'São Paulo-SP'
        }
    ]
    
    return (
        <View>
            <Header name="Home" />
            <ScrollView style={{ marginBottom: 60 }} showsVerticalScrollIndicator={false} >
                <TouchableOpacity onPress={() => navigation.navigate('Detalhes')} >
                    
                <CardHome post={post[0]}  />
                </TouchableOpacity>
                <CardHome post={post[1]} />
                <CardHome post={post[2]} />
            </ScrollView>
        </View>
    )
}

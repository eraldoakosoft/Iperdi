import React from 'react'
import {Text, View} from 'react-native'
import Header from '../components/Header'
import CardChat from '../components/CardChat'

export default function FeedChat(){
    
    const users = [
        {
            id: 1,
            name: 'Eraldo Simão',
            msg: 'Tudo bem?',
            avatarUrl: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png',
            hora: '22:10'
        },
        {
            id: 2,
            name: 'José',
            msg: 'Boa tarde',
            avatarUrl: 'https://cdn.pixabay.com/photo/2018/04/28/13/18/man-3357275_960_720.png',
            hora: '22:19'
        },
        {
            id: 3,
            name: 'Vanessa',
            msg: 'Olá, tudo bem?',
            avatarUrl: 'https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804_960_720.png',
            hora: '20:11'
        },
    ]

    return(
        <View>
            <Header name="Chat"/>
            <CardChat users={users[0]} />
            <CardChat users={users[1]} />
            <CardChat users={users[2]} />
        </View>
    )
}
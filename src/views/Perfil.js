import React from 'react'
import { Text, View } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

import HeaderPerfil from '../components/HeaderPerfil'

export default function Perfil() {

    const list = [
        {
            title: 'Appointments',
            icon: 'av-timer'
        },
        {
            title: 'Trips',
            icon: 'flight-takeoff'
        }
    ]

    return (
        <View>
            <View>
                <HeaderPerfil/>
            </View>


            {
                list.map((item, i) => (
                    <ListItem key={i} bottomDivider>
                        <Icon name={item.icon} />
                        <ListItem.Content>
                            <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))
            }
        </View>
    )
}
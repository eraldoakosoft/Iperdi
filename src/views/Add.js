import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ListItem } from 'react-native-elements'
import HeaderAdd from '../components/HeaderAdd'

export default function Perfil() {

    const list = [
        {
            title: 'CNH',
        },
        {
            title: 'RG'
        },
        {
            title: 'CPF'
        },
        {
            title: 'CRLV',
        },
        {
            title: 'Cartões'
        },
        {
            title: 'Carteira de trabalho'
        },
        {
            title: 'Titulo de eleitor'
        },{
            title: 'Carteira Escolar'
        }
    ]

    return (
        <View style={{flex: 1}}>
            <View>
                <HeaderAdd/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ marginBottom: 10 }} >
                    {
                        list.map((item, i) => (
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>{item.title}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron color="#000" size={20} />
                            </ListItem>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}
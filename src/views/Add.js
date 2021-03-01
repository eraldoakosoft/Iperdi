import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ListItem } from 'react-native-elements'
import Header from '../components/Header'

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
                <Header name="Achei"/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ marginBottom: 10 }} >
                    {
                        list.map((item, i) => (
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title style={styles.txtTitle} >{item.title}</ListItem.Title>
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

const styles = StyleSheet.create({
    txtTitle:{
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
    }
})
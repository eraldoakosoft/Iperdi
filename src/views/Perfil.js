import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

import HeaderPerfil from '../components/HeaderPerfil'

export default function Perfil({navigation}) {

    const list = [
        {
            title: 'Notificações',
            icon: 'notifications-outline',
            subtitle: 'Minha central de notificações'
        },
        {
            title: 'Meus dados',
            icon: 'clipboard-outline',
            subtitle: 'Minhas informações da conta'
        },
        {
            title: 'Carteira',
            icon: 'wallet-outline',
            subtitle: 'Meus documentos cadastrados'
        },
        {
            title: 'Configurações',
            icon: 'settings-outline',
            subtitle: 'Minhas configurações'
        },
        {
            title: 'Sair',
            icon: 'exit-outline',
            subtitle: 'Entrar em outra conta'
        }
    ]

    return (
        <View style={{flex: 1}}>
            <View>
                <HeaderPerfil />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ marginBottom: 10 }} >
                    {
                        list.map((item, i) => (
                            <ListItem key={i} bottomDivider onPress={ ( )=> navigation.navigate( item.title !== 'Sair' ? item.title : 'Detalhes' ) } >
                                <Icon name={item.icon} size={35} color="#000" />
                                <ListItem.Content  >
                                    <ListItem.Title style={styles.txtTitle} >{item.title}</ListItem.Title>
                                    <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron color="#000" size={30}  />
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
    },
    txtSubTitle:{
        fontSize: 14,
        fontFamily: 'Montserrat-Light',
    }
})
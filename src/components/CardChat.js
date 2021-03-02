import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View,Left, Right, Body, ListItem, Thumbnail } from 'native-base'

export default function CardChat(props) {
    return (
        <View>
            <ListItem avatar  >
                <Left>
                    <Thumbnail source={{ uri: props.users.avatarUrl }} ></Thumbnail>
                </Left>
                <Body>
                    <Text style={styles.name} >{props.users.name}</Text>
                    <Text style={styles.msg} >{props.users.msg}</Text>
                </Body>
                <Right>
                    <Text style={styles.hora} >{props.users.hora}</Text>
                </Right>
            </ListItem>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20
    },
    msg: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16
    },
    hora: {
        fontFamily: 'Montserrat-SemiBold'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
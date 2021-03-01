import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Header(props) {
    return (
        <View style={styles.container} >      
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#009FE3',
        height: 60,
        alignContent: 'center',
    },
    text:{
        fontSize: 25,
        color: '#fff',
        margin: 5,
        fontFamily: 'Montserrat-SemiBold',
        alignSelf: 'center',
        marginTop: 10
    },

})
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function HeaderPerfil() {
    return (
        <View style={styles.container} >      
            <Text style={styles.text}>Achei</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#595959',
        alignItems: 'center',
        height: 50,
        alignContent: 'center'
    },
    text:{
        fontSize: 25,
        color: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        margin: 5
    },

})
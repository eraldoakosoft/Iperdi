import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'

export default function HeaderPerfil() {
    return (
        <View style={styles.container} >
            <Avatar
                size="medium"
                rounded
                title="ES"
                activeOpacity={0.5}
                containerStyle={{ backgroundColor: '#F2F2F2' }}
                titleStyle={ { color: '#595959' } }
            />
            <Text style={styles.text} >Eraldo Simão</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#009FE3',
        alignItems: 'center',
        height: 100,
        alignContent: 'center',
        paddingLeft: 20
    },
    text:{
        fontSize: 28,
        marginLeft: 15,
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold'
    },

})
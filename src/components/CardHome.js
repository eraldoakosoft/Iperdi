import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Avatar } from 'react-native-elements'

export default function CardHome(props) {
    return (
        <TouchableOpacity style={styles.container}  >
            <View style={styles.container_header}>
                <View style={styles.container_header_1} >
                    <Avatar
                        size="medium"
                        rounded
                        source={{ uri: props.post.avatarUrl }}
                    />
                    <Text style={styles.text_name_user} >{props.post.user}</Text>
                </View>

                <View style={styles.container_header_2} >
                    <Text style={styles.text_postagem} >{props.post.horarioPostagem}</Text>
                </View>
            </View>
            <Image
                source={props.post.foto}
                style={styles.cover}
            />
            <View style={styles.container_header} >
                <View>
                    <Text style={styles.title} >{props.post.nome}</Text>
                    <Text style={styles.sub_title} >{props.post.cidade}</Text>
                </View>
                <View style={styles.container_recompensa} >
                    <Text style={styles.text} >Recompensa</Text>
                    <Text style={styles.price} >R$ {props.post.recompensa}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
        backgroundColor: '#FFF',
        height: 350,
        width: '99%',
        elevation: 3,
        padding: 2,
    },
    cover: {
        width: '95%',
        height: 220,
        borderRadius: 10,
        alignSelf: 'center'
    },
    content: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 5,
        padding: 3,
    },
    title: {
        fontSize: 19,
        color: '#000',
        fontFamily: 'Montserrat-Bold',
        marginLeft: 5
    },
    sub_title: {
        fontSize: 16,
        color: '#4f4a4a',
        fontFamily: 'Montserrat-Bold',
        marginLeft: 5
    },
    badge: {
        color: 'red',
        fontSize: 14
    },
    description: {
        fontSize: 12,
        color: '#4f4a4a',
    },
    footer: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        width: '100%'
    },
    price: {
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        color: 'green'
    },
    container_header: {
        flexDirection: 'row',
        margin: 5,
        width: '98%',
        justifyContent: 'space-between'
    },
    container_header_1: {
        flexDirection: 'row',
    },
    container_header_2: {
        flexDirection: 'row-reverse',
        alignItems: 'baseline'
    },
    text_name_user: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        marginLeft: 5,
        alignSelf: 'flex-start',
        padding: 5
    },
    text_postagem: {
        alignSelf: 'flex-start',
        fontFamily: 'Montserrat-Light',
        fontSize: 12
    },
    container_recompensa:{
        flex: 1,
        alignItems: 'flex-end'
    },
    text:{
        fontFamily: 'Montserrat-SemiBold',
        color: '#000'
    }
})
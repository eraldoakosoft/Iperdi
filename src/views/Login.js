import React from 'react'
import { View, KeyboardAvoidingView, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default function App(props){
  return(
    <KeyboardAvoidingView style={styles.background} >
      <View style={styles.containerLogo} >
        <Image source={require('../assets/img/logo-branco.png')} />
      </View>
      <View style={styles.container} >
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={ () => {} }
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={ () => {} }
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={ () => props.navigation.navigate('Home') } >
          <Text style={styles.submitText} >Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} onPress={ () => props.navigation.navigate('Cadastro') } >
          <Text style={styles.registerText} >Criar conta</Text>
        </TouchableOpacity>

      </View>


    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#009FE3'
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center',
    marginTop: 50
  },
  container:{
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%'
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: '#155A9E',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText:{
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  btnRegister:{
    marginTop: 10
  },
  registerText:{
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16
  }
})
import React from 'react'
import { View, KeyboardAvoidingView, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default function App(){
  return(
    <KeyboardAvoidingView style={styles.background} >
      <View style={styles.containerLogo} >
        <Image source={require('../assets/logo-branco.png')} />
      </View>
      <View style={styles.container} >
        <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={ () => {} }
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          autoCorrect={false}
          onChangeText={ () => {} }
        />

        <TouchableOpacity style={styles.btnSubmit} >
          <Text style={styles.submitText} >Criar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#595959'
  },
  containerLogo:{
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginTop: 15,
  },
  container:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
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
    backgroundColor: '#2F2F2F',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText:{
    color: '#FFF',
    fontSize: 18
  },
  btnRegister:{
    marginTop: 10
  },
  registerText:{
    color: '#FFF'
  }
})
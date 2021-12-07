import React, { useState } from 'react'
import {
     Text,
     View,
     TextInput,
     TouchableOpacity,
     StyleSheet,
     ImageBackground,
     SafeAreaView
} from 'react-native'

const image = { uri: 'https://i.pinimg.com/originals/6d/6d/a1/6d6da1386014c5a3d5877a14488eeb5d.jpg' }

export default props => {
     const initialState = {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          stageNew: false
     }
     const [state, setState] = useState(initialState)

     const handleChangeText = (value, string) => {
          setState({ ...state, [string]: value })
     }

     return (
          <View style={styles.container}>
               <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={styles.imageBackground}>
                    <Text style={styles.textStrong}>Bem-vindo ao Kora!</Text>
                    <View>
                         <View style={styles.card}>
                              <Text style={styles.cardTitle}>Nome:</Text>
                              <TextInput
                                   placeholder='Digite seu nome'
                                   style={styles.cardInput}
                                   value={state.name}
                                   onChangeText={(value) => handleChangeText(value, 'name')}
                              />
                         </View>

                         <View style={styles.card}>
                              <Text style={styles.cardTitle}>E-mail:</Text>
                              <TextInput
                                   placeholder='Digite seu e-mail'
                                   style={styles.cardInput}
                                   value={state.email}
                                   onChangeText={(value) => handleChangeText(value, 'email')}
                              />
                         </View>

                         <View style={styles.card}>
                              <Text style={styles.cardTitle}>Confirmação de Senha:</Text>
                              <TextInput
                                   secureTextEntry={true}
                                   placeholder='********'
                                   style={styles.cardInput}
                                   value={state.confirmPassword}
                                   onChangeText={(value) => handleChangeText(value, 'confirmPassword')}
                              />
                         </View>

                         <View style={styles.card}>
                              <Text style={styles.cardTitle}>Senha:</Text>
                              <TextInput
                                   secureTextEntry={true}
                                   placeholder='********'
                                   style={styles.cardInput}
                                   value={state.password}
                                   onChangeText={(value) => handleChangeText(value, 'password')}
                              />
                         </View>

                         <TouchableOpacity style={styles.button}>
                              <Text style={styles.buttonText}>
                                   CONTINUAR
                              </Text>
                         </TouchableOpacity>


                         <View style={styles.terms}>
                              <Text style={{color:'white'}}>
                                   Ao tocar no botão 'Continuar' você aceita nossos{" "}
                                   <Text style={styles.underlineText}>
                                   termos de uso
                                   </Text>
                                   {" "} e {" "}
                                   <Text style={styles.underlineText}>
                                   política de privacidade
                                   </Text>
                              </Text>
                         </View>
                    </View>
               </ImageBackground>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          width: '100%'
     },
     textStrong: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          margin: 20
     },
     imageBackground: {
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center'
     },
     card: {
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
     },
     cardTitle: {
          color: 'white',
          marginBottom: 10,
          marginLeft: 10,
     },
     cardInput: {
          backgroundColor: 'white',
          borderRadius: 30,
          height: 45,
          paddingLeft: 15
     },
     button: {
          backgroundColor: 'black',
          borderRadius: 36,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20
     },
     buttonText: {
          color: 'white',
     },
     underlineText: {
          textDecorationLine: 'underline',
          color: 'white'
     },
     terms: {
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
     }

})

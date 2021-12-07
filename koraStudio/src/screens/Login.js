import React, { useState } from 'react'
import {
     Text,
     View,
     TextInput,
     TouchableOpacity,
     StyleSheet,
     ImageBackground,
} from 'react-native'

const image = { uri: 'https://i.pinimg.com/originals/6d/6d/a1/6d6da1386014c5a3d5877a14488eeb5d.jpg' }

export default props => {
     const initialState = {
          email: '',
          password: '',
          stageNew: false
     }
     const [state, setState] = useState(initialState)

     const handleChangeText = (value, string) => {
          setState({ ...state, [string] : value })
     }

     const loginUser = () => {
          console.log('User logged in')
     }

     return (
          <View style={styles.container}>
               <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={styles.imageBackground}>
                    <Text style={styles.textStrong}>Acessar minha conta</Text>
                    <View>

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
                              <Text style={styles.cardTitle}>Senha:</Text>
                              <TextInput
                                   secureTextEntry={true}
                                   placeholder='********'
                                   style={styles.cardInput}
                                   value={state.password}
                                   onChangeText={(value) => handleChangeText(value, 'password')}
                              />
                         </View>


                         <TouchableOpacity style={styles.button} onPress={()=> loginUser}>
                              <Text style={styles.buttonText}>
                                   LOGIN
                              </Text>
                         </TouchableOpacity>

                         <TouchableOpacity style={[styles.button, styles.buttonWhite ]} onPress={()=> props.navigation.navigate('Register')}>
                              <Text style={styles.buttonText2}>
                                   REGISTRE-SE
                              </Text>
                         </TouchableOpacity>

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
          backgroundColor: '#5A0089',
          borderRadius: 36,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20
     },
     buttonWhite: {
          backgroundColor: 'white',
     },
     buttonText: {
          color: 'white',
     },
     buttonText2: {
          color: '#5A0089'
     }
})

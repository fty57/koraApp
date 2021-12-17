import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'


export default props => {
     return (
          <View>
               <Header
                    backgroundColor='#000'
                    leftComponent={
                         <View style={styles.navbarLogo}>
                              <Image
                                   style={styles.Logo}
                                   source={require('../../assets/img/kora.png')}
                              />
                         </View>
                    }
                    rightComponent={
                         <TouchableOpacity>
                              <Image
                                   style={styles.profileImage}
                                   source={require('../../assets/img/profileGirl.png')}
                              />
                         </TouchableOpacity>
                    }
               />

               <ScrollView>
                    {/* App */}
               </ScrollView>
          </View>
     )
}

const styles = StyleSheet.create({
     navbarLogo: {
          marginTop: 10,
          marginLeft: 10
     },
     Logo: {
          width: 72.5,
          height: 27.5,
     },
     navbarIcons: {
          flexDirection: 'row',
     },
     seachIcon: {
          marginTop: 10,
          marginRight: 20,
     },
     profileImage: {
          width: 30,
          height: 30,
          borderRadius: 5,
          marginTop: 10,
          marginRight: 10
     }
})

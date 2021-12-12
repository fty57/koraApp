import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'



export default props => {
     
     return (
          <View>
               <View style={styles.navbar}>
                    <View style={styles.navbarLogo}>
                         <Image 
                         style={styles.Logo}
                         source={require('../../assets/img/kora.png')}
                         />
                    </View>
                    <View style={styles.navbarIcons}>
                         <TouchableOpacity style={styles.seachIcon}>
                              <Icon name='search-outline' type='ionicon' color='#000' />
                         </TouchableOpacity>
                         <TouchableOpacity>
                              <Image
                                   style={styles.profileImage}
                                   source={require('../../assets/img/profileGirl.png')}
                              />
                         </TouchableOpacity>
                    </View>
               </View>
               
          </View>
     )
}

const styles = StyleSheet.create({
     navbar: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: "space-between"
     },
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
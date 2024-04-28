import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';

const Info = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.container1}>
              <View style={styles.tit}>
                <Text style={styles.icon}>H</Text>
                <Text style={styles.profile}>Profile</Text>
                </View>
            </View>
            <View style={styles.container2}>
            <Image source={require('../../../image/icon.jpg')} style={{ width: 96, height: 96, borderRadius:50 }} />

                <Text style={styles.name}>Mai Thuyen</Text>
                <Text style={styles.gmail}>maivanthuyen07042004@gmail.com</Text>
                <TouchableOpacity>
                  <View style={styles.edit}>
                    <Text style={styles.editProfile} >edit profile</Text>
                  </View>
                </TouchableOpacity>

            </View>
            <View style={styles.container3}>
              <View style={styles.info}>
                <Text style={styles.textInfo}>0123456789</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.textInfo}>maivanthuyen07042004@gmail.com</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.textInfo}>01/01/19988

                </Text>
              </View>
            </View>
            <View style={styles.container4}>
            
            <TouchableOpacity 
            style={styles.logout}
            
            onPress={()=>{
            // navigation.navigate('Signup')
            }} >
            

            <Text style={styles.textLogout}>Logout</Text>
            
            
            </TouchableOpacity>
            
            </View>
        </View>
    )
}
export default Info
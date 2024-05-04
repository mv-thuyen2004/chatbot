import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';

const Info = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.container1}>
              <View style={styles.tit}>
                <TouchableOpacity onPress={()=>{
            navigation.navigate('Home')
                }}>
                    <Text style={styles.icon}>H</Text>
                </TouchableOpacity>
                <Text style={styles.profile}>Account</Text>
                </View>
            </View>
            <View style={styles.container2}>
             
                <Image source={require('../../../image/icon.jpg')} style={{ width: 96, height: 96, borderRadius:50 }} />
                <View style={styles.info}>
                  <Text style={styles.name}>Mai Thuyen</Text>
                  <Text style={styles.info1}>maivanthuyen07042004@gmail.com</Text>
                  <Text style={styles.info1}>0917457884</Text>
                </View>
                

            </View>
            <View style={styles.container3}>

              <TouchableOpacity onPress={()=>{
            navigation.navigate('Change')
                }}>
              <View style={styles.container31}>
                <Text  style={styles.container3Text}>Edit Profile</Text>
                <Text>T</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{
            navigation.navigate('Home')
                }}>
              <View style={styles.container31}>
                <Text  style={styles.container3Text}>Help Center</Text>
                <Text>T</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{
            navigation.navigate('Introduce')
                }}>
              <View style={styles.container31}>
                <Text  style={styles.container3Text}>About Docu AI</Text>
                <Text>T</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{
            navigation.navigate('Feedback')
                }}>
              <View style={styles.container31}>
                <Text  style={styles.container3Text}>Feedback</Text>
                <Text>T</Text>
              </View>
              </TouchableOpacity>

              
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
            <View style={styles.container5}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Home')
                  }}>
                    <Text style={styles.navi}>home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Chats')
                  }}>
                    <Text style={styles.navi}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Info')
                  }}>
                    <Text style={styles.navi}>info</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Info
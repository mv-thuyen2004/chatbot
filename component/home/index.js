import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity ,ScrollView} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
    
    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.logo}>
                <Image source={require('../../image/logo1.png')} style={{ width: 50, height: 50 }} />
                </View>
                <Text style={styles.tit}>Docu ai</Text>
                
            </View>
            <View style={styles.container2}>
                <Text style={styles.myBot}>My Bots</Text>
                <View style={styles.bots}>
                    <ScrollView style={styles.bots1}>
                      <View style={styles.botColumn}>
                        <View style={styles.botRow}>
                            <TouchableOpacity style={styles.bot}
                            onPress={()=>{
                                AsyncStorage.setItem('idBot', '1')
                                navigation.navigate('UpLoadFile')

                            }}
                            >
                                <View style={styles.image}>
                                <Image source={require('../../image/botdocx.jpg')} style={{ width: 60, height: 60, borderRadius:15 }}></Image>
                                </View>
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >DOCX</Text>
                                    <Text style={styles.introduce}>con bot này sẽ trả lời mọi thông tin từ file docx của bạn</Text>
                                </View>
                              
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bot}
                            onPress={()=>{
                                AsyncStorage.setItem('idBot', '2')
                                navigation.navigate('UpLoadFile');

                            }}>
                                <View style={styles.image}>
                                <Image source={require('../../image/botpdf.jpg')} style={{ width: 60, height: 60, borderRadius:15}}></Image>
                                </View>
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >PDF</Text>
                                    <Text style={styles.introduce}>con bot này sẽ trả lời mọi thông tin từ file pdf của bạn</Text>
                                </View>
                              
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.botRow}>
                            <TouchableOpacity style={styles.bot}
                            onPress={()=>{
                                AsyncStorage.setItem('idBot', '3')
                                navigation.navigate('UpLoadFile')

                            }}>
                                <View style={styles.image}>
                                <Image source={require('../../image/botTxt.jpg')} style={{ width: 60, height: 60, borderRadius:15}}></Image>
                                </View>
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >TXT</Text>
                                    <Text style={styles.introduce}>con bot này sẽ trả lời mọi thông tin từ file txt của bạn</Text>
                                </View>
                              
                            </TouchableOpacity>
                            
                            
                        </View>
                        
                        
                            
                        
                       
                      </View>
                    </ScrollView>

                </View>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Home')
                  }}>
                   
                    <Icon name="home" size={30} color="#111111" />

                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Chats')
                  }}>
                    
                    <Icon name="wechat" size={30} color="#A9A9A9" />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Info')
                  }}>
                    <Icon name="user" size={30} color="#A9A9A9" />
                </TouchableOpacity>
                
            </View>
        
            
        </View>
        
    )
}
export default Home
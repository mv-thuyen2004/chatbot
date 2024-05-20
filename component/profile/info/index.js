import { useState ,useEffect} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import config from '../../../config';


const Info = ({navigation}) => {
  const [name , setName] = useState();
  const [gmail, setGmail] = useState();
  const [phone, setPhone] = useState();
  const [avatar, setAvatar] = useState();

  useEffect(()=>{
    AsyncStorage.getItem("name").then(result =>{
      setName(result)
    })
    AsyncStorage.getItem("gmail").then(result =>{
      setGmail(result)
    })
    AsyncStorage.getItem("phone").then(result =>{
      setPhone(result)
    })
    AsyncStorage.getItem("avatar").then(result =>{
      setAvatar(result)
    })
    
  },[])

  

    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.profile}>Account</Text>
            </View>
            <View style={styles.container2}>
             
                {/* <Image source={require('../../../image/icon.jpg')} style={styles.avt} /> */}
                {/* <Image source={config.ip+avatar} style={styles.avt} /> */}
                <Image source={{uri: config.ip+"/" + avatar}} style={styles.avt} />
                {/* <Image source={{uri:  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} style={styles.avt} /> */}

                <View style={styles.info}>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.info1}>{gmail}</Text>
                  <Text style={styles.info1}>{phone}</Text>
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
              AsyncStorage.clear()
             navigation.navigate('Signin')
            }} >
            

            <Text style={styles.textLogout}>Logout</Text>
            
            
            </TouchableOpacity>
            
            </View>
            <View style={styles.container5}>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Home')
                  }}>
                   
                    <Icon name="home" size={30} color="#A9A9A9" />

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
                    <Icon name="user" size={30} color="#111111" />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
export default Info
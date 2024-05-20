
import { Text, View, Image, TextInput, TouchableOpacity ,ScrollView, FlatList} from 'react-native';
import styles from './style';
import { useEffect, useState } from 'react';
import axios from 'axios'
import config from '../../config';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Chats = ({navigation}) => {

    const [botlist,setBotlist]=useState([])
    


    

    useEffect(()=>{
        AsyncStorage.getItem("access_token").then(result =>{
            
            getData(result)
          })         
    },[])


    const getData=(result)=>{
        axios({
            url: config.ip + '/api/chatbot',
            method:'GET',
            headers : {
                'Authorization': "Bearer " + result,
                
            },
        }).then(result =>{
            //console.log(result.data.data)
            const list = result.data.data
            setBotlist(list)
        }).catch(error =>{
            console.log(error)
            console.log('hellpo')
        })
    }
    const renderItem = ({ item }) => (
        
        <TouchableOpacity
        onPress={()=>{
            AsyncStorage.setItem('id_bot', item.id)
            AsyncStorage.setItem('path_avatar', item.path_avatar)
            navigation.navigate('Message_content')
        }}>
            <View style={styles.chats2}>
                <Image source={{uri: config.ip+"/" + item.path_avatar}} style={{ width: 70, height: 70, borderRadius:50 , }  }></Image>
                <View style={styles.inf} >
                <Text style={styles.namechat}>{item.name}</Text>
                <Text style={styles.welcom}>{item.welcome_message}</Text>
                </View>
            </View>
        </TouchableOpacity>
      );


    
  






    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <View style={styles.title1}>
                  <Text style={styles.titlChats}>chats</Text> 
                </View>
            </View>
            <View style={styles.chats}>
                <View style={styles.chats1}>  
                    <FlatList
                   data={botlist}
                   renderItem={renderItem}
                   keyExtractor={(item) => item.id}
                   />
                    
                </View>

                
    
            </View>
            <View style={styles.container3}>
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
                    
                    <Icon name="wechat" size={30} color="#111111" />
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
export default Chats
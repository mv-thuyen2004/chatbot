import  { useState } from 'react';
import { Alert, Button, View ,Text, Image, TextInput, TouchableOpacity ,FlatList} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import config from '../../config';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Message_content = ({navigation})=> {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [message,setMessage] = useState(null)
  const [botlist,setBotlist]=useState([])
  const [disabled,setDisabled]=useState(false)
  const [Color,setColor]=useState("blue")
  const [id_bot,setId_bot]=useState(null)
 

  useEffect(()=>{
    AsyncStorage.getItem("id_bot").then(result =>{
        
        getData(result)
        setId_bot(result)
      })    
    AsyncStorage.getItem("path_avatar").then(result =>{
            
        setImage(result)
    })       
})


const getData=(result)=>{
  axios({
      url: config.ip + '/api/chatbot/'+result,
      method:'GET',
      
  }).then(result =>{

      const list = result.data.messages
      setName(result.data.name)
      setBotlist(list)
  }).catch(error =>{
      console.log(error)
      console.log('hello')
  })
  
}

const renderItem = ({ item }) => {
  
 
  if(item.sender=='bot'){
    
    
    return(
      <View style={styles.bot}>
            <Image source={{uri: config.ip+"/" + image}} style={{ width: 30, height: 30, borderRadius:50, margin:5,flex:1  }}></Image>
            <Text style={styles.text}>{item.content} </Text>
            </View >
            
    )
    
  }
  else if(item.sender=='human'){
    return(
      <View style={styles.human}>
            
        <Text style={styles.textHuman}>{item.content}</Text>
          </View>
    )
  }
  
  
};
const sendContent = async () => {

  setColor('lightgrey')
  setDisabled(true)

  const data = {
    question: message,
     chatbot_id: id_bot
  };

  try {
    const response = await axios({
      method: 'post',
      url: config.ip + '/api/chatbot_answer',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Response:', response.data);
    
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else {
      console.error('Error:', error.message);
      
    }
  }
  setTimeout(() => {
    // Thực hiện hành động của bạn ở đây
    this.flatListRef.scrollToEnd({animated: true})
    setMessage('')
    setDisabled(false)
    setColor('blue')
  }, 10);
  
};


  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <View style={styles.tilt}>
            <TouchableOpacity
            onPress={()=>{
              AsyncStorage.removeItem('id_bot')
              navigation.navigate('Chats')

            }}>
            <Icon name="arrow-left" size={30} color="#111111" style={styles.iconBack} />
            </TouchableOpacity>
            <Image source={{uri: config.ip+"/" + image}} style={{ width: 40, height: 40, borderRadius:50 }}></Image>
            <Text style={styles.name} >{name}</Text>

            </View>
        </View>
        <View style={styles.container2}>
                  <FlatList
                  ref={(ref) => (this.flatListRef = ref)}
                   data={botlist}
                   renderItem={renderItem}
                   //inverted={true}
                   keyExtractor={(item) => item.id}
                   
                   />
          
            
        </View>
        <View style={styles.container3}>
            <TextInput 
            style={styles.textInput}
            value={message}
            
            onChangeText={setMessage}
            placeholder="Type here..."
            editable={!disabled}
            />
            <TouchableOpacity style={styles.iconSend}
            onPress={sendContent}
            disabled={disabled}>
            <Icon name="send" size={30} color= {Color} />
            </TouchableOpacity>
        </View>
    </View>
  )

}

export default Message_content
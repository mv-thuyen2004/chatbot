import  { useState } from 'react';
import { Alert, Button, View ,Text, Image, TextInput, TouchableOpacity ,FlatList} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import config from '../../config';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Chaaat({navigation}) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [message,setMessage] = useState('')
  const [botlist,setBotlist]=useState([])
  const [disabled,setDisabled]=useState(false)

  


const sendContent = async () => {
  const data = {
    question: 'chào bạn ai là vua',
     chatbot_id: '6649dab85bfac3610911901b'
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
    alert('Uploaded successfully!');
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else {
      console.error('Error:', error.message);
      
    }
  }
};




  return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <View style={styles.tilt}>
            <Icon name="arrow-left" size={30} color="#111111" style={styles.iconBack} />
            <Image source={require('../../image/botdocx.jpg')} style={{ width: 40, height: 40, borderRadius:50 }}></Image>
            <Text style={styles.name} >{name}</Text>

            </View>
        </View>
        <View style={styles.container2}>
                  
            
        </View>
        <View style={styles.container3}>
            <TextInput 
            style={styles.textInput}
            value={message}
            onChangeText={setMessage}
            placeholder="Type here..."
            />
            <TouchableOpacity style={styles.iconSend}
            onPress={sendContent}
            disabled={false}>
            <Icon name="send" size={30} color="blue" />
            </TouchableOpacity>
        </View>
    </View>
  )

}

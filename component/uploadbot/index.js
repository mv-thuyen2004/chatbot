import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config';
import { useEffect } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';


const ChangeBot = ({navigation}) => {
  const [name , setName] = useState();
  const [id_bot , setId_bot] = useState();
  
  
  const [pdfUri, setPdfUri] = useState(null);
  const [image, setImage] = useState(null);
  
  

  useEffect(()=>{
    
    AsyncStorage.getItem("path_avatar").then(result =>{
      
      setImage(config.ip+"/" + result)
      

       
    })
    AsyncStorage.getItem("id_bot").then(result =>{
            
      setId_bot(result)
      
    }) 
  
    

  },[])
  
  
  
  const pickPdf = async () => {
    
    let result = await DocumentPicker.getDocumentAsync({
      type: ['image/png', 'image/jpeg'],
      copyToCacheDirectory: true,
    });
    // Kiểm tra nếu người dùng hủy bỏ việc chọn file
    if (result.canceled) {
      console.log('Người dùng đã hủy bỏ việc chọn file.');
      // Thực hiện các hành động phù hợp ở đây
    } else {
      // Lấy URI của file đã chọn
      
      const fileUri = result.assets[0].uri;
      setPdfUri(fileUri);
      
      setImage(fileUri)
      // alert('File đã được chọn: ' + fileUri);
      // alert(avatar)
    

   

    }
    }
  const upLoadInfo = async () => {
    

    const formData = new FormData();
    if (!pdfUri && !name ){
      alert('bạn không có thay đổi gì');
      return;
    }else{
      if(pdfUri){formData.append('avatar', {
        uri: pdfUri,
        name: 'sad.png', // Or customize the filename as needed
        type: 'image/png',
      })
      
    }
      if(name){
        formData.append('name',name)
        
      }
      
    
    
  }

    try {
      const response = await axios.put(config.ip+'/api/chatbot/'+id_bot, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
         // Required for file uploads
        },
      }).then(response => {
        
        AsyncStorage.setItem('path_avatar', response.data.path_avatar)
        
        


        
    //     const { success}= response.data;
    //     console.log(success)
    // if(success){
    //   const { path_avatar }= response.data;
    //   //console.log(path_avatar)
    //   // AsyncStorage.setItem('avatar', path_avatar)}
    })
        

      //console.log('PDF uploaded successfully:', response);
      // AsyncStorage.setItem('avatar', pdfUri)
     
      // Handle successful upload logic here (e.g., clear file selection, display success message)
      alert(' uploaded successfully!');

      
      setPdfUri(null); // Optionally, clear the selected file
      
      navigation.navigate('Chats')
    } catch (error) {
      console.error('Error uploading :', error);
      alert('Error uploading : ' + error.message); // Inform user about the error
    }
     
  };



  const DeleteBot = async () => {
    try {
      const response = await axios.delete(config.ip+'/api/chatbot/'+id_bot
      ).then(response => {
        
        
    })
    
     AsyncStorage.removeItem('id_bot')
      alert(' delete chat successfully!');
      navigation.navigate('Home')
    } catch (error) {
      console.error('Error uploading :', error);
      alert('Error uploading : ' + error.message); // Inform user about the error
    }
     
  };


  
  return (
    <View style={styles.container}>
      <View style={styles.text} >
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('Message_content')
            }}
        >
          {/* <Text style={styles.header} > M </Text> */}
          <Icon name="arrow-left" size={20} color="#111111" style={styles.header} />
        </TouchableOpacity>
        <Text style={styles.header1}>Bot</Text>
        <TouchableOpacity 
        onPress={DeleteBot}
        style={styles.names}> 
        <Icon name="trash-alt" size={20} color="#111111"  />
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <Image source={{uri: image}} style={styles.avatar}>  
        </Image>
        <TouchableOpacity style={styles.iconE}
            onPress={pickPdf}
            >
            {/* <Text style={styles.iconE} >Ềdit</Text> */}
            <Icon name="edit" size={15} color="#111111"  style={styles.iconE} />
            </TouchableOpacity>
      </View>

      <View style={styles.input}>
        <Text style={styles.label} >Name chat</Text>
        <TextInput
          style={styles.inputText}
          value={name}
          onChangeText={setName}
          >
        </TextInput>

      
        
        </View>
        <View style={styles.change}>

        <TouchableOpacity
          onPress={upLoadInfo}

        >
          <View style={styles.update} >
            <Text style={styles.textUpdate}>Update</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
  );
}
export default ChangeBot
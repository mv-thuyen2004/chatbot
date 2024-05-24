import { Text, View, Image,Input, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './style';
import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import config from '../../config';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';


const UpLoadFile = ({navigation}) => {
  const [name , setName] = useState();
  const [Uri, setUri] = useState(null);
  const [id, setId] = useState();
  const [access_token,setAccess_token]=useState()

  useEffect(()=>{
    AsyncStorage.getItem("idBot").then(result =>{
      setId(result)
      
    })
    AsyncStorage.getItem("access_token").then(result =>{
        setAccess_token(result)

    })         
    
  },[])
 
  

  if(id=='1'){
    setId('application/vnd.openxmlformats-officedocument.wordprocessingml.document')
  }else if(id=='2'){
    setId('application/pdf')
  }else if(id=='3'){
      setId('text/plain')
  }

  const pickFile = async () => {
    
    // if(id=='1'){
    //   setId('application/pdf')
    // }
    console.log(id)
    let result = await DocumentPicker.getDocumentAsync({
      type: id,
      copyToCacheDirectory: true,
    });
    // Kiểm tra nếu người dùng hủy bỏ việc chọn file
  if (result.canceled) {
    console.log('Người dùng đã hủy bỏ việc chọn file.');
    // Thực hiện các hành động phù hợp ở đây
  } else {
    // Lấy URI của file đã chọn
    //console.log(result.assets[0].size)
    setUri(Uri);
    console.log(result.assets[0].name)
    alert('tải thành công file: ' + result.assets[0].name);
  }
  // ['text/plain','application/pdf','application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    
  };
  
  const uploadFile = async () => {
    if (!Uri) {
      alert('Please select a file first.');
      return;
    }
    if (!name){
      alert('Please name the chat ')
      return;
    }

    const formData = new FormData();
    formData.append('name',name)
    if(id=='1'){
    formData.append('files', {
      uri: Uri,
      name: 'file.docx', // Or customize the filename as needed
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });}
    else if(id=='2'){
      formData.append('files', {
        uri: Uri,
        name: 'file.pdf', // Or customize the filename as needed
        type: 'application/pdf',
      });}
    else if (id=='3'){
      formData.append('files', {
        uri: Uri,
        name: 'file.txt', // Or customize the filename as needed
        type: 'application/pdf',
      });

    }
    

    


    try {
      const response = await axios.post(config.ip+'/api/chatbot', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
          'Authorization': "Bearer "+ access_token,
          // Required for file uploads
        },
      });
      console.log('PDF uploaded successfully:', response.data);
      console.log(response.data.id)
      // Handle successful upload logic here (e.g., clear file selection, display success message)
       AsyncStorage.setItem('id_bot',response.data.id)
      alert('PDF uploaded successfully!');
      navigation.navigate('Message_content')
      setUri(null); // Optionally, clear the selected file
    } catch (error) {
      console.error('Error uploading PDF:', error);
      alert('Error uploading PDF: ' + error.message); // Inform user about the error
    }
     
  };
  
  






    return(
        <View  style={styles.container}>
            <View style={styles.container1}>
                
                <Text style={styles.chatbot}>Tạo chatbot</Text>
            </View>
            <View style={styles.container2}>
                <Image source={require('../../image/profile.jpg')} style={{ width: 360, height: 205 }} />
                </View>
            <View style={styles.container3}>
              
              <View style={styles.input}>
                <Text style={styles.name}>Name conversation</Text>
                <TextInput style={styles.textInput} 
                placeholder='Vui lòng nhập tên hội thoại'
                value={name}
                onChangeText={setName}
                
                />
              </View>
              <View style={styles.change}>
                 <View>
                   <Text style={styles.name}>Upload file</Text>
                 </View>

                 <TouchableOpacity
                  onPress={pickFile}
                  > 
                  
                    <View style={styles.upload} >
                    <Icon name="file-upload" size={40} color="black" />
                     <Text style={styles.textUpload}>PICK A FILE</Text>
                    </View>
                 </TouchableOpacity>
               </View>
            </View>
          
        <View style={styles.container4}>
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('Home')
        }}>
            <View style={styles.cancel} >
              <Text style={styles.textCancel}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={uploadFile}
          >
            <View style={styles.update} >
              <Text style={styles.textUpdate}>UpLoad</Text>
            </View>
          </TouchableOpacity>
          
          </View>
      
        
        </View>
        
        
    )}
export default UpLoadFile
        

    
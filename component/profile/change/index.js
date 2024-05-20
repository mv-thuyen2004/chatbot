import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config';
import { useEffect } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


const Change = ({navigation}) => {
  const [name , setName] = useState();
  const [name1 , setName1] = useState();
  const [gmail, setGmail] = useState();
  const [phone, setPhone] = useState();
  const [gmail1, setGmail1] = useState();
  const [phone1, setPhone1] = useState();
  const [pdfUri, setPdfUri] = useState(null);
  const [image, setImage] = useState(null);
  
  

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
      
      setImage(config.ip+"/" + result)

      
      
       
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
      //console.log(result.assets[0].size)
      const fileUri = result.assets[0].uri;
      setPdfUri(fileUri);
      
      setImage(fileUri)
      // alert('File đã được chọn: ' + fileUri);
      // alert(avatar)
    

   

    }
    }
  const upLoadInfo = async () => {
    

    const formData = new FormData();
    if (!pdfUri && !name1 && !gmail1 && !phone1){
      alert('bạn không có thay đổi gì');
      return;
    }else{
      if(pdfUri){formData.append('avatar', {
        uri: pdfUri,
        name: 'sad.png', // Or customize the filename as needed
        type: 'image/png',
      })
      
    }
      if(name1){
        formData.append('fullname',name1)
        alert(name1)
      }
      if(phone1){
        formData.append('phone',phone1)
      alert(phone1)}
      if(gmail1){
        formData.append('email',gmail1)
      alert(gmail1)}
    
    
  }

    try {
      const response = await axios.put(config.ip+'/api/user/6645e0e8a383a7809c11ccd3', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
         // Required for file uploads
        },
      }).then(response => {
        console.log(response.data)
        AsyncStorage.setItem('avatar', response.data.path_avatar)
        AsyncStorage.setItem('name', response.data.fullname)
        AsyncStorage.setItem('phone', response.data.phone)
        AsyncStorage.setItem('gmail',response.data.email)


        
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
      alert('PDF uploaded successfully!');

      
      setPdfUri(null); // Optionally, clear the selected file
      
      navigation.navigate('Home')
    } catch (error) {
      console.error('Error uploading PDF:', error);
      alert('Error uploading PDF: ' + error.message); // Inform user about the error
    }
     
  };


  
  return (
    <View style={styles.container}>
      <View style={styles.text} >
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('Info')
            }}
        >
          {/* <Text style={styles.header} > M </Text> */}
          <Icon name="arrow-left" size={30} color="#111111" style={styles.header} />
        </TouchableOpacity>
        <Text style={styles.header1}>edit Profile</Text>
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
        <Text style={styles.label} >Tên người dùng</Text>
        <TextInput
          style={styles.inputText}
          value={name1}
          onChangeText={setName1}
          placeholder={name}>
        </TextInput>

        <Text style={styles.label} >Gmail</Text>
        <TextInput
          style={styles.inputText}
          value={gmail1}
          onChangeText={setGmail1}
          placeholder={gmail}>
        </TextInput>

        <Text style={styles.label} >Số điện thoại</Text>
        <TextInput
          style={[styles.inputText]}
          value={phone1}
          onChangeText={setPhone1}
          
          placeholder={phone}>
        </TextInput>
        </View>
        <View style={styles.change}>

        <TouchableOpacity
          onPress={upLoadInfo}

        >
          <View style={styles.update} >
            <Text style={styles.textUpdate}>update</Text>
          </View>
        </TouchableOpacity>
        </View>
    </View>
  );
}
export default Change


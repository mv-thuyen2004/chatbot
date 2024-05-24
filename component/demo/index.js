import  { useState } from 'react';
import { Alert, Button, View ,Text, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import config from '../../config';

export default function UpLoad({navigation}) {
  const [pdfUri, setPdfUri] = useState(null);
  const [image, setImage] = useState(null);
  const [user, setUser] = useState('hellooo');


 alert(user) /// heloo
 setUser("hi")
 alert(user) // hi
  

  const pickPdf = async () => {
    
    let result = await DocumentPicker.getDocumentAsync({
      type: 'image/png',
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
    //alert('File đã được chọn: ' + fileUri);
   

  }
  
    
  };

  const uploadPdf = async () => {
    if (!pdfUri) {
      alert('Please select a PDF file first.');
      return;
    }

    const formData = new FormData();
    formData.append('avatar', {
      uri: pdfUri,
      name: 'sad.png', // Or customize the filename as needed
      type: 'image/png',
    });

    try {
      const response = await axios.put(config.ip+'/api/user/6645e0e8a383a7809c11ccd3', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file uploads
        },
      });
      console.log('PDF uploaded successfully:', response.data);
      // Handle successful upload logic here (e.g., clear file selection, display success message)
      alert('PDF uploaded successfully!');
      setPdfUri(null); // Optionally, clear the selected file
    } catch (error) {
      console.error('Error uploading PDF:', error);
      alert('Error uploading PDF: ' + error.message); // Inform user about the error
    }
     
  };
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick a PDF file" onPress={pickPdf} />

      
      {pdfUri && <Text>Selected PDF: {pdfUri}</Text>}
      <Image source={{ uri: pdfUri }} style={{height:60 , width:60}}></Image>
      <Button title="Pgui" onPress={uploadPdf} />
      <Button title="Pguip" onPress={()=>{
        navigation.navigate('Signin')
      }} />

    </View>
    
  );
}
// const uploadPdf = async (pdfUri) => {
//   let formData = new FormData();
//   formData.append('pdf', {
//     uri: pdfUri,
//     name: 'document.pdf',
//     type: 'application/pdf',
//   });

//   try {
//     let response = await axios.post('YOUR_API_ENDPOINT', formData);
//     console.log('PDF uploaded successfully:', response.data);
//   } catch (error) {
//     console.error('Error uploading PDF:', error);
//   }
// };
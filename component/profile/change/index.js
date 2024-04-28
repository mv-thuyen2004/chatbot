import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';
import axios from 'axios';




const Signin = ({navigation}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [gmail, setGmail] = useState('');
  const [phone, setPhone] = useState('')
  const log = () => {
    if (name.length == 0 || date.length == 0) {
      alert(' vui long nhap tai khoan hoac mat khau')
    }
    else {
      axios({
        method: 'get',
        url: 'http://192.168.1.8:8000/a/data',
        headers: { "Accept": "application/json, text/plain, /", "Content-Type": "multipart/form-data" },
        params: {
          var1: name,
          var2: date
        }


      })
        .then(response => {
          // Xử lý dữ liệu nhận được từ backend ở đây
          console.log(response.data);
          alert(JSON.stringify(response.data))

        })
        .catch(error => {
          // Xử lý lỗi nếu có
          console.error('Error fetching data:', error);
        });
      //alert(user+password)
    }


  }
  return (
    <View style={styles.container}>
      <View style={styles.text} >
        <TouchableOpacity
        onPress={()=>{
            navigation.navigate('Info')
            }}
        >
          <Text style={styles.header} > M </Text>
        </TouchableOpacity>
        <Text style={styles.header1}>edit Profile</Text>
      </View>
      <View style={styles.icon}>
        <ImageBackground source={require('../../../image/icon.jpg')} style={{ width: 128, height: 128 }}>
            <Text style={styles.iconE}>E</Text>
        </ImageBackground>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          value={name}
          onChangeText={setName}
          placeholder="Albert Flores">
        </TextInput>
        <TextInput
          style={styles.inputText}
          value={date}
          onChangeText={setDate}
          placeholder="01/01/1988">
        </TextInput>
        <TextInput
          style={styles.inputText}
          value={gmail}
          onChangeText={setGmail}
          placeholder="maivanthuyen07042004@gmail.com">
        </TextInput>
        <TextInput
          style={[styles.inputText]}
          value={phone}
          onChangeText={setPhone}
          
          placeholder="0917457884">
        </TextInput>
        </View>
        <View style={styles.change}>

        <TouchableOpacity
          onPress={log}

        >
          <View style={styles.update} >
            <Text style={styles.textUpdate}>update</Text>
          </View>
        </TouchableOpacity>
        </View>
        
      

    </View>
  );
}
export default Signin


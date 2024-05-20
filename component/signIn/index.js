import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import axios from 'axios';
import config from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Signin = ({ navigation }) => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('')
  const log = () => {
    if (user.length == 0 || password.length == 0) {
      alert(' vui long nhap tai khoan hoac mat khau')
    }
    else {

      const data = {
        username: user,
        password: password
      };
      
      axios.post(config.ip+'/api/login', data)
  .then(response => {
    // console.log(response.data);
    const { success}= response.data;
    if(success){
      const { fullname , email , phone, path_avatar, username, access_token }= response.data;
      if(fullname == null){
        AsyncStorage.setItem('name', username)

      }else{
      AsyncStorage.setItem('name', fullname)
      }
      AsyncStorage.setItem('gmail', email)
      AsyncStorage.setItem('phone', phone)
      AsyncStorage.setItem('avatar', path_avatar)
      AsyncStorage.setItem('access_token', access_token)
      
      

      setUser('')
      setPassword('')

      navigation.navigate('Home')
    }
    else{
    console.log('sai')
    }

    })
  .catch(error => {
    //console.log('tài khoản hoặc mật khẩu không đúng')
    //console.error('Lỗi đăng nhập:', error);
    alert("tài khoản hoặc mật khẩu không chính xác")
    
    
  });
      // axios({
      //   method: 'post',
      //   url: 'http://192.168.1.7:5055/api/login',
      //   headers: { "Accept": "application/json, text/plain, /", "Content-Type": "multipart/form-data" },
      //   params: {
          
      //     "username": user,

      //     "password": password,
          
      //   }


      // })
      //   .then(response => {
      //     // Xử lý dữ liệu nhận được từ backend ở đây
      //     // const { variable1, variable2 }= response.data
      //     // alert(variable1+variable2)

      //     console.log(response.data);
      //     //alert(JSON.stringify(response.data))
      //     // if(response.data=="hello world"){
      //     //   navigation.navigate('Home')


      //     // }

      //   })
      //   .catch(error => {
      //     // Xử lý lỗi nếu có
      //     console.error('Error fetching data:', error);
      //   });
      //alert(user+password)
    }


  }
  return (
    <View style={styles.container}>
      <View style={styles.text} >
        <Text style={styles.header} >Login</Text>
        <Text style={styles.header1}>Welcome back</Text>
      </View>
      <View style={styles.icon}>
        <Image source={require('../../image/icon.jpg')} style={{ width: 220, height: 270 }} />
      </View>
      <View style={styles.input}>
        <Text style={styles.textInput}  >Enter your mobile number</Text>
        <TextInput
          style={styles.inputText}
          value={user}
          onChangeText={setUser}
          placeholder="0123456789">
        </TextInput>
        <Text style={styles.textInput} >Enter your password</Text>
        <TextInput
          style={[styles.inputText]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="********">
        </TextInput>
        <TouchableOpacity>
          <Text style={styles.forgot} >forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={log}
        >
          <View style={styles.login} >
            <Text style={styles.textLogin}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.signUp} >
          <Text  >Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup')
            }}
             >
            <Text style={styles.signUp2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
export default Signin


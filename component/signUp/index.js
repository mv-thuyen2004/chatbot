import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import axios from 'axios';
import config from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Signup = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('')
  const [re_password, setRe_password] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')


  const log = () => {
    //console.log(user)
    if (user.length != 0 && password.length != 0 && re_password.length != 0 && phone.length != 0 && email.length != 0) {
      if(password == re_password){
        const data = {
          username: user,
          password: password,
          email: email,
          phone: phone
        };
        
        
        axios.post(config.ip+'/api/user', data)
      .then(response => {
          //console.log(response.data);
          const { role}= response.data;
          if(role){
             const {  email , phone, username , access_token }= response.data;
            
             AsyncStorage.setItem('name', username)         
             AsyncStorage.setItem('gmail', email)
             AsyncStorage.setItem('phone', phone)
             AsyncStorage.setItem('access_token', access_token)
  
             navigation.navigate('Home')
          }
          
  
        })
        .catch(error => {
          //console.error('Lỗi đăng nhập:', error);
          alert("tài khoản đã tồn tại")
        });
      }
      else{
        alert('mật khẩu không khớp')
      }
    }


    else {
      alert(' vui lòng nhập đầy đủ thông tin')


      
      //alert(user+password)
    }


  }
  return (
    <View style={styles.container}>
      <View style={styles.text} >
        <Text style={styles.header} >Register</Text>
        <Text style={styles.header1}>Welcome back</Text>
      </View>

      <View style={styles.input}>
        <Text style={styles.textInput}  >Enter your userName</Text>
        <TextInput
          style={styles.inputText}
          value={user}
          onChangeText={setUser}
          placeholder="0123456789">
        </TextInput>
        <Text style={styles.textInput}  >Enter your phone Number</Text>
        <TextInput
          style={styles.inputText}
          value={phone}
          onChangeText={setPhone}
          placeholder="0123456789">
        </TextInput>
        <Text style={styles.textInput}  >Enter your email</Text>
        <TextInput
          style={styles.inputText}
          value={email}
          onChangeText={setEmail}
          placeholder="abc123@gmail.com">
        </TextInput>
        <Text style={styles.textInput} >Enter your password</Text>
        <TextInput
          style={[styles.inputText]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="********">
        </TextInput>
        <Text style={styles.textInput} >Re-Enter your password</Text>
        <TextInput
          style={[styles.inputText]}
          value={re_password}
          onChangeText={setRe_password}
          secureTextEntry={true}
          placeholder="********">
        </TextInput>
        
        <TouchableOpacity
          onPress={log}
        >
          <View style={styles.login} >
            <Text style={styles.textLogin}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.signUp} >
          <Text >Don't have an account? </Text>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Signin')}
          }
          >
            <Text style={styles.signUp2}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
export default Signup


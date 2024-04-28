import { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import axios from 'axios';




const Signin = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('')
  const log = () => {
    if (user.length == 0 || password.length == 0) {
      alert(' vui long nhap tai khoan hoac mat khau')
    }
    else {


      axios({
        method: 'get',
        url: 'http://192.168.1.8:8000/a/data',
        headers: { "Accept": "application/json, text/plain, /", "Content-Type": "multipart/form-data" },
        params: {
          var1: user,
          var2: password
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
          <Text style={styles.signUp1} >Don't have an account? </Text>
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate('Signup')
          }} >
            <Text style={styles.signUp2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}
export default Signin



import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Signup from './component/signUp';
import Signin from './component/signIn';
import Info from './component/profile/info';
import change from './component/profile/change';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Change' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="change" component={Change}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Signin/>

    // </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  // header:{

  //   fontSize:30,
  //   fontWeight:'bold',
  //   marginVertical:30
  // },
  // header1:{
    
  //   fontSize:20

  // },
  // text:{
  //   flex:1,
  //   //backgroundColor:'red',
  //   alignItems:'center',
  //   justifyContent:'center'

  // },
  // icon:{
  //   flex:3,
  //   //backgroundColor:'white',
  //   justifyContent:'center',
  //   alignItems:'center'
  // },
  // input:{
  //   flex:4,
  //   //backgroundColor:'yellow'
  // },
  // textInput:{
  //   marginLeft:20,
  //   marginTop:10

  // },
  // inputText:{
  //   height: 55,
  //   borderWidth:1,
  //   borderRadius:15,
  //   marginHorizontal:20,
  //   marginVertical:10,
  //   padding:10
  // },
  // forgot:{
  //   textAlign:'right',
  //   margin :20
  // },
  // login:{
  //   backgroundColor:'black',
  //   padding:20,
  //   justifyContent:'center',
  //   alignItems:'center',
  //   marginHorizontal:20,
  //   borderRadius:15,

  // },
  // textLogin:{
  //   color:'white',
    
  // },
  // signUp:{
  //   flex:1,
  //   flexDirection:'row',
  //   justifyContent:'center',
  //   alignItems:'center'

  // },
  // signUp2:{
  //   fontWeight:'bold'

  // }



});

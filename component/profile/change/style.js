import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:"white",
      
      
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    header:{
  
      fontSize:30,
      fontWeight:'bold',
      marginVertical:30
    },
    header1:{
      
      fontSize:20
  
    },
    text:{
      flex:1,
      //backgroundColor:'red',
      alignItems:'center',
      
      flexDirection:'row'
  
    },
    icon:{
      flex:1,
      //backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center'
    },
    iconE:{
        position: 'absolute',
        bottom: 20,
        right: 30,
        color:'blue'
    },
    input:{
      flex:4,
      marginTop:50
      //backgroundColor:'yellow'
    },
    textInput:{
      marginLeft:20,
      marginTop:10
  
    },
    inputText:{
      height: 55,
      borderWidth:1,
      borderRadius:15,
      marginHorizontal:20,
      marginVertical:10,
      padding:10
    },
    
    update:{
      backgroundColor:'black',
      padding:20,
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:20,
      borderRadius:15,
  
    },
    textUpdate:{
      color:'white',   
    },
    change:{
        marginVertical:25
        
    }
  });
export default styles;

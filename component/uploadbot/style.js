import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:"white",
      
    },
    header:{
      paddingHorizontal:10 
    },
    header1:{
      
      fontSize:20,
    },
    text:{
      flex:1,
      //backgroundColor:'red',
      alignItems:'center',
      
      flexDirection:'row'
  
    },
    icon:{
      flex:1,
      // backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center'
  
    },
    iconE:{
        position:'absolute',
        bottom: 0,
        right: 75,
        color:'blue'
    },
    names:{
      marginLeft:270,
      fontSize:100,
      alignItems:'center',
      flexDirection:'row'
    },
    input:{
      flex:4,
      marginTop:50
      //backgroundColor:'yellow'
    },
    avatar:{
      width:128,
      height:128,
      borderRadius: 128

    },
    textInput:{
      marginLeft:20,
      marginTop:10
  
    },
    inputText:{
      height: 48,
      borderWidth:1,
      borderRadius:5,
      marginHorizontal:20,
      marginVertical:10,
      padding:10,
      borderWidth:1,
      borderColor:'lightgrey'
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
        
    },
    label:{
      marginHorizontal:20,
      fontWeight:'bold'
    }
  });
export default styles;
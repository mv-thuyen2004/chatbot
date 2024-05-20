import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    container1:{
      
        flex:1,
        flexDirection:'row',
         alignItems:'center',
         paddingTop:20
    },
    container2:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'yellow'

    },
   
    chatbot:{
        flex:3,
        fontSize:30,
        fontWeight:'bold',
        //backgroundColor:'red',
        //color:'black'
        
        
        textAlign:'center'



    },
    container3:{
        flex:3,
        //backgroundColor:'yellow'
        
    },
    container4:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'

    },
    text:{
        fontSize:20,
        paddingHorizontal:35,
        alignItems:'center'
    },
    input:{
        flex:1,
        marginTop:30,
        //backgroundColor:'red',
      },
      name:{
        fontSize:24,
        fontWeight:'bold',
        marginHorizontal:10
        
        
    },
      textInput:{
        backgroundColor:'lightgrey',
        marginHorizontal:10,
        padding:20,
        borderRadius:30,
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
      change:{
        flex:1,

      },
      update:{
        backgroundColor:'#3617F3',
        padding:20,
        marginHorizontal:20,
        borderRadius:20,
    
      },
      textUpdate:{
        color:'white',  
        paddingHorizontal:25,
        fontSize:22 
      }, 
      cancel:{
        backgroundColor:'#1FBEE1',
        padding:20,
        marginHorizontal:20,
        borderRadius:20,
    
      },
      textCancel:{
        color:'white',  
        paddingHorizontal:25, 
        fontSize:22,
      }, 
      upload:{
        backgroundColor:'#1FE155',
        padding:25,
        marginHorizontal:28,
        borderRadius:20,
        marginTop:10,
      },
      textUpload:{
        color:'white',
        fontSize:25,

         
      }, 
})

export default styles
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
        backgroundColor:'#3399FF',
        padding:15,
        marginHorizontal:20,
        borderRadius:15,
    
      },
      textUpdate:{
        color:'white',  
        paddingHorizontal:20,
        fontSize:20 
      }, 
      cancel:{
        backgroundColor:'grey',
        padding:15,
        marginHorizontal:20,
        borderRadius:15,
    
      },
      textCancel:{
        color:'white',  
        paddingHorizontal:20, 
        fontSize:20,
      }, 
      upload:{
        backgroundColor:'lightgrey',
        padding:15,
        marginHorizontal:20,
        borderRadius:15,
        marginVertical:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      textUpload:{
        flex:8,
        color:'white',
        //fontSize:25,
        paddingHorizontal:20


         
      }, 
})

export default styles
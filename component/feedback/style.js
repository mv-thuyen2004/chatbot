import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    container1:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        //justifyContent:'space-between'
    },
    container2:{
        flex:10,
        
        //justifyContent:'center',
        //alignItems:'center'

    },
    container3:{
        flex:2,
        //backgroundColor:'yellow',
        alignItems:'center',
        
    },
    input:{
        fontSize:18,
        
        
        
        marginHorizontal:30,
       
        padding: 25,
        backgroundColor: '#F3F3F3',
        borderRadius:5,
        fontWeight:'bold',
        textAlignVertical: 'top'
    },
    response:{
        marginTop:30,
        paddingHorizontal:30,
        fontWeight:'bold',
        fontSize:23,
        marginVertical:20

    },
    back:{
        flex:1,
        fontSize:20,
        paddingHorizontal:30
    },
    Feedback:{
        flex:3,
        fontSize:25,
        fontWeight:'bold'

    },
    update:{
        backgroundColor:'#1779f3',
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
          marginVertical:25,
          
          width:300
          
      }
    
})

export default styles
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
        
        //alignItems: 'center',
        //justifyContent: 'center',
      },
    container1:{
      paddingTop:10,
      flex:2,
      // backgroundColor:'yellow',
       justifyContent:'center',
       alignItems:'center',
      
    },
    container2:{
      flex :3,
     // backgroundColor:'pink',
      justifyContent:'center',
      //alignItems:'center',
      flexDirection:'row'
    },
    container3:{
      flex:9,
      paddingTop:20,
      //backgroundColor:'blue',
      //justifyContent:'center',
      //alignItems:'center',
    },
    container4:{
      flex:3,
      //backgroundColor:'green',
      
    },
    container5:{
      flex:1,
      //backgroundColor:'pink',
      flexDirection:'row',
      justifyContent:'space-around',
      paddingVertical:5,
      
      
      


      

    },
    navi:{
      flex:1,

      
    },
    
  
    profile:{
      
      fontSize:30,
      fontWeight:'bold'

    },
    avt:{
      marginLeft:40,

      flex:3,
       width: 96, 
       height: 96, 
       borderRadius:96 ,
    },
    info:{
      flex:6,
      paddingHorizontal:5
    
    },
    info1:{
      fontSize:13,
      paddingVertical:3,
      fontWeight:'500'

    },
    
    name:{
      fontWeight:'bold',
      fontSize:20,

    },
    container31:{

      flexDirection:'row',
      //backgroundColor:'red',
      paddingHorizontal:50,
      justifyContent:'space-between',
      paddingTop:20

    },
    container3Text:{
      fontSize:15,
      fontWeight:"600",
      
    },

    

    



    logout:{
      
      //flex:1,
      backgroundColor:'black',
      padding:20,
        justifyContent:'center',
        alignItems:'center',
       marginHorizontal:30,
       borderRadius:15,
      
  
    },
    textLogout:{
      color:'white',
      //marginHorizontal:20,
      
    },


})
export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
        
        //alignItems: 'center',
        //justifyContent: 'center',
      },
    container1:{
      flex:1,
      //backgroundColor:'yellow',
       justifyContent:'center',
      // alignItems:'center',
      
    },
    container2:{
      flex :2,
      //backgroundColor:'pink',
      justifyContent:'center',
      alignItems:'center',
    },
    container3:{
      flex:3,
      paddingTop:70,
      //backgroundColor:'blue',
      //justifyContent:'center',
      //alignItems:'center',
    },
    container4:{
      flex:2,
      //backgroundColor:'green',
      
    },
    tit:{
      flexDirection:'row',
      paddingHorizontal:30,
    },
    icon:{},
    profile:{
      marginLeft:110,
      fontSize:25,
      fontWeight:'bold'

    },
    gmail:{
      padding:9,
      fontSize:12,
    
    },
    edit:{
      //backgroundColor:'blue',
      borderColor:'lightgrey',
      borderWidth:1,
      borderRadius:5
    },
    editProfile:{
      paddingHorizontal:50,
      paddingVertical:2,
      
    },
    name:{
      fontWeight:'bold',
      fontSize:16,

    },

    info:{
      borderColor:'lightgrey',
      borderWidth:1,
      borderRadius:8,
      marginHorizontal:30,
      marginBottom:20
    },
    textInfo:{
      padding:15


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
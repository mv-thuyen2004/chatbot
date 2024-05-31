import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    container1:{
        flex:1,
         
        
    },
    container2:{
        flex:8,
        
        
    },
    container3:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
        

    },
    tilt:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:15,
        marginTop:40,
        
    },
    inf:{

        flexDirection:'row',
        flex:8
    },

    name:{
        margin:5,
        paddingHorizontal:10,
        fontWeight:'bold',
        fontSize:18,
        
        
    },
    iconBack:{
        paddingHorizontal:20,
        flex:1
    },
    iconChange:{
       
        flex:1,
        paddingHorizontal:20
        


    },
    textInput:{

        
        height: 50,
        borderWidth:1,
        borderRadius:15,
        marginHorizontal:20,
        marginVertical:10,
        padding:10    ,
        flex:8,
        borderColor:'lightgrey'
    
    },
    iconSend:{
        flex:1
    },
    bot:{
        marginTop:20,
        flexDirection:'row',
    },
    text:{
        
        flex:8,
        marginRight:80,
        padding:10,
        borderRadius:15,
        backgroundColor:'lightgrey',

        
    },
    human:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    textHuman:{
        marginRight:20,
        marginLeft:80,
        padding:10,
        borderRadius:15,
        backgroundColor:'#0066FF',
        color:'white'

    }



})

export default styles
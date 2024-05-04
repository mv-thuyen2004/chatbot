import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    container3: {
        flex: 1,
        //backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
    },
    title:{
        flex:1,
        backgroundColor:'lightgrey',
        
        
        

    },
    title1:{
        flex:1,
        flexDirection:'row',
        
        
        
    },
    home:{
        flex:3,
        //backgroundColor:'red',
        

        
    },
    iconH:{
        fontSize:26,
        paddingVertical:20,
        paddingHorizontal:30,

    },
    titlChats:{
        //backgroundColor:'blue',
        flex:5,
        paddingVertical:20,
        fontSize:26,


    },

    chats:{
        flex:9,
        
        //backgroundColor:'blue'
    },
    chats1:{
        padding:15,
    },
    chats2:{
        flex:1,
        flexDirection:'row',
        paddingVertical:10

    },
    namechat:{
        
        paddingVertical:15,
        paddingHorizontal:2
    }


})

export default styles
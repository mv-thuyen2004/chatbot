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
        flex:2,
        //backgroundColor:'lightgrey',
        paddingTop:25,
        paddingLeft:20,
        
        
        

    },
    title1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
        
        
        
    },
    
    titlChats:{
        //backgroundColor:'blue',
        flex:5,
    
        fontSize:30,
        paddingHorizontal:20



    },

    chats:{
        flex:18,
        
        
        
    },
    chats1:{
        padding:15,
       
    },
    chats2:{
        flex:1,
        flexDirection:'row',
        paddingVertical:10,
        
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center'

    },
    namechat:{
        
        
        paddingHorizontal:6,
        fontSize:20,
        fontWeight:'500'
        
        
    },
    Image:{
        flex:1,
       

    },
    inf:{
        flex:8,
        

    },
    welcom:{
        
        paddingHorizontal:6,
        

    }


})

export default styles
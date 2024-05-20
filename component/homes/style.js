import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFF'
    },
    container1: {
        flex: 2,
        flexDirection: 'row',

        alignItems: 'center',
        paddingHorizontal: 30

    },
    container2: {
        flex: 12,
    },
    container3: {
        flex: 1,
        //backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
    },
    logo: {
        flex: 3
    },
    tit: {
        flex: 5,
        fontWeight: 'bold',
        fontSize: 26
    },
    myBot: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 10,
        fontWeight: 'bold',
    
    },
    bots: {
        flex: 25,
        marginHorizontal:30


    },
    bots1: {
        //flex: 1,
        //flexDirection:'row',
        //backgroundColor: 'lightgrey',

    },
    
    botRow:{
        //flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:25,
    },
    botColumn:{
        flexDirection:'column',
        
    },
    bot:{
        height:160,
        width:130,
        backgroundColor:'#f6f6f6',
        borderRadius:20
        
        

    },
    image:{

        flex:2,
        padding:10,
        


    },
    infoBot:{
        flex:4,

        backgroundColor:'#f6f6f6',
        borderTopLeftRadius:20,
    },
    nameBot:{
        fontWeight:'bold',
        paddingTop:5,
        paddingHorizontal:10
    },
    introduce:{
        fontSize:13,
        paddingHorizontal:10,
    }




})
export default styles
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    container1:{
        flex:2,
        //backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        //justifyContent:'space-between'
    },
    container2:{
        flex:4,
        //backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'

    },
    container3:{
        flex:9,
        //backgroundColor:'yellow',
        alignItems:'center',
        
    },
    text:{
        fontSize:20,
        paddingHorizontal:35,
        alignItems:'center'
    },
    back:{
        flex:1,
        fontSize:20,
        paddingHorizontal:30
    },
    Introduce:{
        flex:3,
        fontSize:25,
        fontWeight:'bold'

    },
    name:{
        fontWeight:'bold',
        
    }
})

export default styles
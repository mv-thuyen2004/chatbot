
import { Text, View, Image, TextInput, TouchableOpacity ,ScrollView} from 'react-native';
import styles from './style';


const Chats = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <View style={styles.title1}>
                    <TouchableOpacity   
                        style={styles.home}

                        onPress={()=>{
                        navigation.navigate('Home')
                    }}>
                    <Text style={styles.iconH}>H</Text>
                    </TouchableOpacity>
                
                    
                  <Text style={styles.titlChats}>chats</Text> 
                </View>
            </View>
            <View style={styles.chats}>
                <ScrollView style={styles.chats1}>
                    <TouchableOpacity>
                    <View style={styles.chats2}>
                        <Image source={require('../../image/icon.jpg')} style={{ width: 70, height: 70, borderRadius:50 }}></Image>
                        <Text style={styles.namechat}>name chat</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.chats2}>
                        <Image source={require('../../image/icon.jpg')} style={{ width: 70, height: 70, borderRadius:50 }}></Image>
                        <Text style={styles.namechat}>name chat</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.chats2}>
                        <Image source={require('../../image/icon.jpg')} style={{ width: 70, height: 70, borderRadius:50 }}></Image>
                        <Text style={styles.namechat}>name chat</Text>
                    </View>
                    </TouchableOpacity>
                </ScrollView>

                
    
            </View>
            
        </View>
        
    )
}
export default Chats
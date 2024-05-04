import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';


const Introduce = ({navigation}) => {
    return(
        <View  style={styles.container}>
            <View style={styles.container1}>
                <TouchableOpacity 
                style={styles.back}
                onPress={()=>{
                    navigation.navigate('Info')
                  }}>
                    <Text >back</Text>
                  </TouchableOpacity>
                
                <Text style={styles.Introduce}>Introduce</Text>
            </View>
            <View style={styles.container2}>
                <Image source={require('../../image/logo1.png')} style={{ width: 90, height: 90 }} />
                <Text style={styles.name}> DOCU AI</Text>
                <Text style={styles.version}>v1.0</Text>
            </View>
            <View style={styles.container3}>
                <Text style={styles.text}>Docu Ai là một loạt phần mềm được thiết kế
                     để tương tác với người dùng thông qua giao diện trò truyện 
                     , thường là qua các ứng dụng nhắn tin hoặc trang web.
                     Ứng dụng chatbot văn bản sử dụng LLM để có thể trả lời những câu
                      hỏi của người dùng dựa trên tài liệu mà họ gửi vào
                     </Text>
            </View>

        </View>
    )}

export default Introduce
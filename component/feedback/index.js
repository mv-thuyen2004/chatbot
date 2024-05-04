import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import  { useState } from 'react';
import styles from './style';


const Feedback = ({navigation}) => {
    const [text, onChangeText] = useState('');

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
                
                <Text style={styles.Feedback}>Feedback</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.response}>response content</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Please describe the specific the specific problem so we can provide better service"
                multiline={true}
                numberOfLines={8}
            
                />
            </View>

            <View style={styles.container3}>
              <View style={styles.change}>

                <TouchableOpacity >
                  <View style={styles.update} >
                   <Text style={styles.textUpdate}>send</Text>
                   </View>
                </TouchableOpacity>
              </View>
                
            </View>

        </View>
    )}

export default Feedback

import { Text, View, Image, TextInput, TouchableOpacity ,ScrollView} from 'react-native';
import styles from './style';

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.logo}>
                <Image source={require('../../image/logo1.png')} style={{ width: 50, height: 50 }} />
                </View>
                <Text style={styles.tit}>Docu AI</Text>
                
            </View>
            <View style={styles.container2}>
                <Text style={styles.myBot}>My Bots</Text>
                <View style={styles.bots}>
                    <ScrollView style={styles.bots1}>
                      <View style={styles.botColumn}>
                        <View style={styles.botRow}>
                            <View style={styles.bot}>
                                <View style={styles.image}>
                                <Image source={require('../../image/writing.png')} style={{ width: 50, height: 50 }}></Image>
                                </View>
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >Write an Articles</Text>
                                    <Text style={styles.introduce}>Generate well-written articles on any topic you want</Text>
                                </View>
                              
                            </View>
                            <View style={styles.bot}>
                                <View style={styles.image}>
                                <Image source={require('../../image/academic.png')} style={{ width: 50, height: 50 }}></Image>
                                </View>
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >Academic Writer</Text>
                                    <Text style={styles.introduce}>Generate educational writing such as essays reports etc</Text>
                                </View>
                              
                            </View>
                            
                        </View>
                        <View style={styles.botRow}>
                            <View style={styles.bot}>
                                <View style={styles.image}>
                                <Image source={require('../../image/summarize.png')} style={{ width: 50, height: 50 }}></Image>
                                </View>
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >Summarize (TL:DR)</Text>
                                    <Text style={styles.introduce}>Extract key points from long texits</Text>
                                </View>
                              
                            </View>
                            <View style={styles.bot}>
                                <View style={styles.image}>
                                <Image source={require('../../image/languages.png')} style={{ width: 50, height: 50 }}></Image>
                                </View>
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >Translate Language</Text>
                                    <Text style={styles.introduce}>Translate from one language to another </Text>
                                </View>
                              
                            </View>
                            
                        </View>
                        <View style={styles.botRow}>
                            <View style={styles.bot}>
                                <View style={styles.image}>
                                <Image source={require('../../image/checker.png')} style={{ width: 50, height: 50 }}></Image>
                                </View>
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >Plagiarism Checker</Text>
                                    <Text style={styles.introduce}>check the </Text>
                                </View>
                              
                            
                              
                            
                              
            
                              
                            </View>
                            
                        </View>
                       
                      </View>
                    </ScrollView>

                </View>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Home')
                  }}>
                    <Image source={require('../../image/home1.png')} style ={{ width:30 , height:30 }}/>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Chats')
                  }}>
                    <Image source={require('../../image/chats.png')} style ={{ width:30 , height:30 }}/>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Info')
                  }}>
                    <Image source={require('../../image/user2.png')} style ={{ width:30 , height:30 }}/>
                </TouchableOpacity>
                
            </View>
        
            
        </View>
        
    )
}
export default Home
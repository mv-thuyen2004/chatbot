
import { Text, View, Image, TextInput, TouchableOpacity ,ScrollView} from 'react-native';
import styles from './style';


const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.logo}>
                <Image source={require('../../image/logo1.png')} style={{ width: 50, height: 50 }} />
                </View>
                <Text style={styles.tit}>Docu ai</Text>
                
            </View>
            <View style={styles.container2}>
                <Text style={styles.myBot}>My Bots</Text>
                <View style={styles.bots}>
                    <ScrollView style={styles.bots1}>
                      <View style={styles.botColumn}>
                        <View style={styles.botRow}>
                            <View style={styles.bot}>
                                <Image source={require('../../image/logo1.png')} style={styles.image}></Image>
                                
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >PDF</Text>
                                    <Text style={styles.introduce}>con bot nay se tra loi thong tin ban gui vao pdf</Text>
                                </View>
                              
                            </View>
                            <View style={styles.bot}>
                                <Image source={require('../../image/logo1.png')} style={styles.image}></Image>
                                
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >PDF</Text>
                                    <Text style={styles.introduce}>con bot nay se tra loi thong tin ban gui vao pdf</Text>
                                </View>
                              
                            </View>
                            
                        </View>
                        <View style={styles.botRow}>
                            <View style={styles.bot}>
                                <Image source={require('../../image/logo1.png')} style={styles.image}></Image>
                                
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >PDF</Text>
                                    <Text style={styles.introduce}>con bot nay se tra loi thong tin ban gui vao pdf</Text>
                                </View>
                              
                            </View>
                            <View style={styles.bot}>
                                <Image source={require('../../image/logo1.png')} style={styles.image}></Image>
                                
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >PDF</Text>
                                    <Text style={styles.introduce}>con bot nay se tra loi thong tin ban gui vao pdf</Text>
                                </View>
                              
                            </View>
                            
                        </View>
                        <View style={styles.botRow}>
                            <View style={styles.bot}>
                                <Image source={require('../../image/logo1.png')} style={styles.image}></Image>
                                
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >PDF</Text>
                                    <Text style={styles.introduce}>con bot nay se tra loi thong tin ban gui vao pdf</Text>
                                </View>
                              
                            </View>
                            <View style={styles.bot}>
                                <Image source={require('../../image/logo1.png')} style={styles.image}></Image>
                                
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >PDF</Text>
                                    <Text style={styles.introduce}>con bot nay se tra loi thong tin ban gui vao pdf</Text>
                                </View>
                              
                            </View>
                            
                        </View>
                        <View style={styles.botRow}>
                            <View style={styles.bot}>
                                <Image source={require('../../image/logo1.png')} style={styles.image}></Image>
                                
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >PDF</Text>
                                    <Text style={styles.introduce}>con bot nay se tra loi thong tin ban gui vao pdf</Text>
                                </View>
                              
                            </View>
                            <View style={styles.bot}>
                                <Image source={require('../../image/logo1.png')} style={styles.image}></Image>
                                
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >PDF</Text>
                                    <Text style={styles.introduce}>con bot nay se tra loi thong tin ban gui vao pdf</Text>
                                </View>
                              
                            </View>
                            
                        </View>
                        <View style={styles.botRow}>
                            <View style={styles.bot}>
                                <Image source={require('../../image/logo1.png')} style={styles.image}></Image>
                                
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >PDF</Text>
                                    <Text style={styles.introduce}>con bot nay se tra loi thong tin ban gui vao pdf</Text>
                                </View>
                              
                            </View>
                            <View style={styles.bot}>
                                <Image source={require('../../image/logo1.png')} style={styles.image}></Image>
                                
                                <View style={styles.infoBot}>
                                    <Text style={styles.nameBot} >PDF</Text>
                                    <Text style={styles.introduce}>con bot nay se tra loi thong tin ban gui vao pdf</Text>
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
                    <Text style={styles.home}>home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Chats')
                  }}>
                    <Text style={styles.chat}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Info')
                  }}>
                    <Text style={styles.info}>info</Text>
                </TouchableOpacity>
                
            </View>
        
            
        </View>
        
    )
}
export default Home
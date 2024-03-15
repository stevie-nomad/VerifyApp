import { View, Text, Pressable, Image, Button } from 'react-native';
import React from 'react';

const Welcome = ({ navigation }) => {

    return (

            <View style={{ flex: 1 }}>
               <View>
                    <Text style={{
                        fontSize: 60,
                        fontWeight: 900,
                        top: 200,
                        textAlign:'center'
                    }}>
                        Verify
                    </Text>
                         <View style={{width:200, height:200}}>
                            <Image source={require("../assets/barcode-scan.png")} style={{width:'100%', height:'100%', marginLeft:100, marginTop:200, resizeMode:'cover'}}/> 
                         </View>
               </View>

               <View style={{
                    paddingHorizontal: 22,
                    top:300,
                    width: "100%",
                    
                }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 200,
                        marginBottom:30,
                        textAlign:'center'
                    }}>Let's Get Started</Text>


                    
                <Button
                    onPress={() => navigation.navigate("SignUp")}
                    title="Signup"
                    style={{
                        marginTop:15,
                        marginBottom: 4,
                    }}
                />
           

                    <View style={{
                        flexDirection: "row",
                        marginTop: 50,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>   
    )
}

export default Welcome;
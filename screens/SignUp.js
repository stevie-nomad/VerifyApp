import { View, Text, Pressable, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { registerUser, getAllUsers, checkLoginCredentials } from './database';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword ] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');
  
    const handleRegister = () => {
      registerUser(email, username, password, (userId) => {
        console.log('User registered with ID:', userId);
        navigation.navigate('Login')
      });
    };
  
    useEffect(() => {
      // Fetch and display all registered users
      getAllUsers((users) => {
        console.log('All registered users:', users);
      });
    }, []);
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/*title*/}
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        textAlign:'center'
                    }}>
                        Register 
                    </Text>

                </View>

                {/*Email Address*/}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            value={email}
                            onChangeText={setEmail}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>


                {/*Username*/}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Username</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter Username'
                            value={username}
                            onChangeText={setUsername}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                
                {/*Password*/}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>
                    

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            style={{
                                width: "100%"
                            }}
                        />


                    </View>
                    
                </View>

                {/*Re-Enter Password */}
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Re-Enter Password</Text>
                    

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            value={reenterPassword}
                            onChangeText={setReenterPassword}
                            secureTextEntry={true}
                            style={{
                                width: "100%"
                            }}
                        />


                    </View>
                    
                </View>

                {/*SignUp Button */}
                <Button
                    onPress={handleRegister}
                    title="SignUp"
                    style={{
                        marginTop:15,
                        marginBottom: 4,
                    }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            marginHorizontal: 10
                        }}
                    />
                  
                </View>

                {/*Login Link*/}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16}}>Already have an account ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp;
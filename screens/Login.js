import { View, Text, Pressable, TextInput,Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { checkLoginCredentials } from './database';


const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username.trim() === '' || password.trim() === '') {
            // Username or password is blank, show an alert
            Alert.alert('Empty Fields', 'Please enter both username and password.');
            return;
        }
    
        // Check login credentials
        checkLoginCredentials(username, password, (user) => {
          if (user) {
            // Credentials are correct, navigate to the home page
            navigation.navigate('Home');
          } else {
            // Incorrect credentials, show an alert
            Alert.alert('Incorrect Details', 'Please enter correct username and password.');
          }
        });
      };    
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                    }}>
                        Hi Welcome Back ! 
                    </Text>

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
                            placeholder='Enter username'
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
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                            style={{
                                width: "100%"
                            }}
                        />


                    </View>
                </View>

  

                {/*Button logs in to Home Page*/}
                <Button
                    onPress={handleLogin}
                    title="Login"
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


                {/*Registration link*/}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16}}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Register</Text>
                    </Pressable>
                </View>

            </View>

        </SafeAreaView>
        
    );
      
}


export default Login;

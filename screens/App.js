// Example using createStackNavigator
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from './Welcome';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Home"  component={Home} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





























/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SimpleLineIcons, FontAwesome, MaterialIcons } from 'react-native-vector-icons'; // Import icons

import { Welcome, SignUp, Login, Menu, Home, Scan, Search, Inventory } from ".";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {
  return (
   <Welcome/>
  );
};

export default App;*/






/* 
 <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="SignUp"
          component={SignUp} 
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer> 
*/




/*
<Drawer.Screen 
         name="Home"
         options={{
          drawerLabel: 'Home',
          title: 'Home',
          drawerIcon: () => (
            <SimpleLineIcons name="home" size={20} color="#808080" />
          ),
          }}
          component={Home}/>
        <Drawer.Screen 
          name="Scan"
          options={{
          drawerLabel: 'Scan',
          title: 'Scan',
          drawerIcon: () => (
            <FontAwesome name="barcode" size={20} color="#808080" />
            ),
          }}
          component={Scan}/>
        <Drawer.Screen 
        name="Search" 
        options={{
          drawerLabel: 'Search',
          title: 'Search',
          drawerIcon: () => (
            <MaterialIcons name="search" size={20} color="#808080" />
          ),
        }}
        component={Search}/>
        <Drawer.Screen 
          name="Inventory" 
          options={{
            drawerLabel: 'Inventory',
            title: 'Inventory',
            drawerIcon: () => (
              <MaterialIcons name="inventory" size={20} color="#808080" />
            ),
          }}
          component={Inventory}/>
          */
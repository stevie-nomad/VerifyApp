import { View, Text} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Scan from "./Scan";
import Search from "./Search";
import Inventory from './Inventory';

const Tab = createBottomTabNavigator();

const Home = () => {

    return (
    
            <View style={{ flex: 1, flexDirection:'row', alignItems:'center'}}>
                    <Tab.Navigator>
                        <Tab.Screen name="Barcode Scanner" component={Scan}/>
                        <Tab.Screen name="Search" component={Search}/>
                        <Tab.Screen name="Inventory" component={Inventory}/>
                    </Tab.Navigator>

            </View>

    )
}

export default Home;
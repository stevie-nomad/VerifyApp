import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { registerProduct, getProducts } from './productdatabase';

const Inventory = (navigation) => {
  const [name, setName] = useState('')
  const [barcode, setBarcode] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [date, setDate] = useState('');


const register = () => {
  registerProduct(name, barcode, manufacturer, date, (productId) => {
    console.log('Product registered with ID:', productId);
    navigation.navigate('Home')
  });
};
  
  useEffect(() => {
    getProducts((products) => {
      console.log('All registered products:', products);

    });
  }, []);
  

  return (
    <View>
      <TextInput
        value={name}
        placeholder='Name'
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        value={barcode}
        placeholder='Barcode'
        onChangeText={setBarcode}
        style={styles.input}
      />
      <TextInput
        value={manufacturer}
        placeholder='Manufacturer'
        onChangeText={setManufacturer}
        style={styles.input}
      />
      <TextInput
        value={date}
        placeholder='Date of Manufacture'
        onChangeText={setDate}
        style={styles.input}
      />
      <Button title="Add Product" onPress={register} />      
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default Inventory;


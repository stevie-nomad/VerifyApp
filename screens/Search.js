import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WebView from 'react-native-webview';


const Search = () => {
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Input the SM# number</Text>
        <WebView
          source={{ uri: `https://verification.kebs.org/smarks_folder/smarks_page.html` }}
          style={styles.webView}
          javaScriptEnabled={true}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:200
  },
  text: {
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color: '#3390ff'
  },
  webView: {
    flex: 1,
  },
});

export default Search;

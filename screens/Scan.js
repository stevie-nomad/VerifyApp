import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Modal, StatusBar, SafeAreaView, Pressable, Alert} from 'react-native';
import { Camera, requestCameraPermissionsAsync, requestPermissionsAsync } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import WebView from 'react-native-webview';

export default function Scan({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const [cameraRef, setCameraRef] = useState(null);
  const [flashlightOn, setFlashlightOn] = useState(false);
  const [showWebView, setShowWebView] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);



  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      console.log('Camera permission status:', status);
      setHasPermission(status === 'granted');
    };

    requestCameraPermission();
  }, []);



  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
  };

  const handleScanAgain = () => {
    setScanned(false);
    setScannedData('');
  };


  const toggleFlashlight = () => {
    setFlashlightOn(!flashlightOn);
    const mode = flashlightOn
      ? Camera.Constants.FlashMode.off
      : Camera.Constants.FlashMode.torch;
    cameraRef?.current?.setFlashModeAsync(mode);
  };

  const onCameraReady = () => {
    // You can do something when the camera is ready
  };

  const handleButtonPress = () => {
    setShowWebView(true);
    setModalVisible(true);
  };

  const injectedJavaScript = `
    (function() {
      var element = document.querySelector('.main_column');
      if (element) {
        document.body.innerHTML = '<div style="padding: 20px;">' + element.innerHTML + '</div>';
      }
    })();
  `;

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#61dafb"/> 
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ref={(ref) => setCameraRef(ref)}
        onCameraReady={onCameraReady}
        flashMode={
          flashlightOn
            ? Camera.Constants.FlashMode.torch
            : Camera.Constants.FlashMode.off
        }
      />
      <View style={styles.overlay}>
        <MaterialIcons
          name={flashlightOn ? 'flash-on' : 'flash-off'}
          size={30}
          color="white"
          onPress={toggleFlashlight}
        />
      </View>
      {scanned && (
        <View style={styles.scanDataContainer}>
            <View style={styles.buttonContainer}>
                <Pressable onPress={handleButtonPress} style={styles.viewData}>
                    <Text style={styles.view}>View Data</Text>
                </Pressable>
                <Pressable onPress={handleScanAgain} style={styles.scanAgain}>
                    <Text style={styles.scan}>Scan Again</Text>
                </Pressable>
            </View> 
          <Text style={styles.scanDataText}>{scannedData}</Text>
        </View>
      )}
      {showWebView && (

      <Modal animationType='slide' transparent={true} visible={modalVisible} onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
         <WebView
          source={{ uri: `https://barcode-list.com/barcode/EN/Search.htm?barcode=${scannedData}` }}
          style={styles.webView}
          injectedJavaScript={injectedJavaScript}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          useWebKit={true}
          />
      </Modal>
            )}


    </SafeAreaView>
  );
}

    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 30,
    right: 0,
    flexDirection: 'row',
    flex:1,
    justifyContent:'space-between',
    alignItems: 'center',
  },
  scanDataContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
  },
  scanDataText: {
    color: '#fff',
    marginBottom: 10,
  },
  buttonContainer: {
    justifyContent:'space-between',
    flexDirection:'row',
  },
  viewData: {
    backgroundColor:'#000000',
    width:'30%',
    padding:4,
    marginRight:30
  },
  view: {
    color:'#ffffff',
    textAlign:'center'
  },
  scanAgain: {
    backgroundColor:'#ffffff',
    width:'30%',
    padding:4,
    borderColor:'#000000',
    borderWidth:1
  },
  scan: {
    color:'#000000',
    textAlign:'center'
  },
  webView: {
    flex: 1,
  },
});
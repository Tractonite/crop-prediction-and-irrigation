import React, { useState, useEffect } from 'react';
import { Text, TextInput, StyleSheet, Button, View, ImageBackground } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserData } from './Contexts/UserData.js'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CropPrediction from './screens/CropPrediction.js'
import FertilizerPrediction from './screens/FertilizerPrediction.js'
import OptionScreen from './screens/OptionScreen.js';
import NextButton from './components/NextButton.js';
const Stack = createNativeStackNavigator();
function App() {
  const [crop, setData] = useState("Input values and press on Detect Crop to predict the crop");
  const [n, setN] = useState('');
  const [p, setP] = useState('');
  const [k, setK] = useState('');
  const [temp, setTemp] = useState('');
  const [hum, setHum] = useState('');
  const [ph, setPH] = useState('');
  const [option, setOption] = useState(null)
  // const cal1 = () => {
  //   fetch('https://thingspeak.com/channels/2222536/fields/1/last.json')
  //     .then(response => response.json())
  //     .then(json => setTemp(json.field1))
  //     .catch(error => console.error(error));
  // };

  // const cal2 = () => {
  //   fetch('https://thingspeak.com/channels/2222536/fields/3/last.json')
  //     .then(response => response.json())
  //     .then(json => setHum(json.field3))
  //     .catch(error => console.error(error));
  // };

  // useEffect(() => {
  //   cal2();
  //   cal1();
  // }, []);

  const apiCall = () => {
    fetch("https://flask-web-app-as4r.onrender.com/prediction", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'n': n,
        'p': p,
        'k': k,
        'temp': temp,
        'hum': hum,
        'ph': ph
      }),
    })
      .then(res => res.text())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF',
    },
    background: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: 10,
      borderRadius: 8,
      marginBottom: 10,// Adjusted color for better visibility
    },
    box: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: 10,
      borderRadius: 8,
      marginBottom: 10,
    },
    button: {
      marginVertical: 10,
      backgroundColor: '#0C7641',
      padding: 10,
      borderRadius: 8,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'center',
      color: '#333',
    },
  });

  return (
    //<UserData.Provider value={{ option, setOption }}>
    // <SafeAreaView style={styles.container}>
    //   <ImageBackground source={require('./background.jpg')} style={styles.background}>
    //     <Text style={{ fontSize: 50, color: '#0C7641', marginBottom: 20, fontWeight: 'bold', fontStyle: 'italic', textDecorationLine: 'underline' }}>Crop Prediction</Text>
    //     <Text style={styles.text}>Enter the input</Text>
    //     <TextInput
    //       onChangeText={setN}
    //       style={styles.input}
    //       placeholder='Input N value'
    //     />
    //     <TextInput
    //       onChangeText={setP}
    //       style={styles.input}
    //       placeholder='Input P value'
    //     />
    //     <TextInput
    //       onChangeText={setK}
    //       style={styles.input}
    //       placeholder='Input K value'
    //     />
    //     <View style={styles.box}>
    //       <Text>Temperature: {temp}</Text>
    //     </View>
    //     <View style={styles.box}>
    //       <Text>Humidity: {hum}</Text>
    //     </View>
    //     <TextInput
    //       onChangeText={setPH}
    //       style={styles.input}
    //       placeholder='Input pH value'
    //     />
    //     <Button title='Detect Crop' onPress={apiCall} color="#0C7641"></Button>
    //     <Text style={{ ...styles.text, color: 'white' }}>{crop}</Text>
    //   </ImageBackground>
    // </SafeAreaView>
    <UserData.Provider value={{ option, setOption, crop, n, p, k, temp, hum, ph, setData, setP, setK, setN, setTemp, setHum, setPH }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OptionScreen"
            component={OptionScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CropPredictions"
            component={CropPrediction}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="FertilizerPredictions"
            component={CropPrediction}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserData.Provider>
  )
}

export default App;

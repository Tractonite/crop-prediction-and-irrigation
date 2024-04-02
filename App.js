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
import SmartIrrigation from './screens/SmartIrrigation.js';
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

  return (

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
            component={FertilizerPrediction}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SmartIrrigation"
            component={SmartIrrigation}
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

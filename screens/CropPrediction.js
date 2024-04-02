import React, { useState, useEffect } from 'react';
import { Text, TextInput, StyleSheet, Button, View, ImageBackground } from 'react-native';
import { UserData } from '../Contexts/UserData';
import { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import NextButton from '../components/NextButton';

export default function CropPrediction() {
    const { crop, n, p, k, temp, hum, ph, setData, setP, setK, setN, setTemp, setHum, setPH } = useContext(UserData)
    // const [crop, setData] = useState("Input values and press on Detect Crop to predict the crop");
    // const [n, setN] = useState('');
    // const [p, setP] = useState('');
    // const [k, setK] = useState('');
    // const [temp, setTemp] = useState('');
    // const [hum, setHum] = useState('');
    // const [ph, setPH] = useState('');
    // const [option, setOption] = useState(null)
    // const cal1 = () => {
    //     fetch('https://thingspeak.com/channels/2222536/fields/1/last.json')
    //         .then(response => response.json())
    //         .then(json => setTemp(json.field1))
    //         .catch(error => console.error(error));
    // };

    // const cal2 = () => {
    //     fetch('https://thingspeak.com/channels/2222536/fields/3/last.json')
    //         .then(response => response.json())
    //         .then(json => setHum(json.field3))
    //         .catch(error => console.error(error));
    // };

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
        // container: {
        //     flex: 1,
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     backgroundColor: '#F5FCFF',
        // },
        background: {
            flexDirection: 'row'
        },
        linearGradient: {
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5
        },
        input: {
            height: 40,
            margin: 1,
            borderWidth: 1,
            padding: 10,
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            color: '#000000', // Adjusted color for better visibility
        },
        outerbox: {

            padding: 10,
            alignItems: 'center',
            paddingTop: 0,
            borderRadius: 8,
            marginBottom: 10,
            borderRadius: 20
        },
        midbox: {
            backgroundColor: '#2cc947',
            borderRadius: 12,
            padding: 20,
            paddingTop: 100
        },
        innerbox: {
            flexDirection: 'row',
            width: 300
        },
        button: {
            marginVertical: 10,
            backgroundColor: '#0C7641',
            padding: 10,
            borderRadius: 8,
        },

        buttonText: {
            color: 'white',
            fontSize: 48,
            borderRadius: 12,
            fontWeight: 'bold',
        },
        text: {
            fontSize: 20,
            marginBottom: 10,
            color: '#333',
        },
        predictionArea: {
        }
    });

    return (
        //<ImageBackground source={require('../background.jpg')} style={styles.background}>
        <View style={styles.outerbox}>
            <View style={styles.midbox}>
                <Text style={{ fontSize: 50, color: 'white', fontWeight: 'bold', marginBottom: 20 }}>Crop Prediction</Text>
                <Text style={styles.text}>Enter the input</Text>
                <View style={styles.innerbox}>
                    <Text style={styles.text}>N:{ }{"\t\t\t" + n}</Text>
                    <TextInput
                        onChangeText={setN}
                        style={styles.input}
                        placeholder='N value'
                    />
                </View>
                <View style={styles.innerbox}>
                    <Text style={styles.text}>P: {"\t\t\t" + p}</Text>
                    <TextInput
                        onChangeText={setP}
                        style={styles.input}
                        placeholder='P value'
                    />
                </View>
                <View style={styles.innerbox}>
                    <Text style={styles.text}>K: {"\t\t\t" + k}</Text>
                    <TextInput
                        onChangeText={setK}
                        style={styles.input}
                        placeholder='K value'
                    />
                </View>
                <View style={styles.innerbox}>
                    <Text style={styles.text}>ph: {"\t" + ph}</Text>
                    <TextInput
                        onChangeText={setPH}
                        style={styles.input}
                        placeholder='pH value'
                    />
                </View>
                <Text style={styles.text}>Temperature: {"\t\t\t" + temp}</Text>
                <Text style={styles.text}>Humidity: {"\t\t\t" + hum}</Text>
            </View>


            <View style={styles.predictionArea}>
                <NextButton
                    backgroundColor='#1d802e'
                    textColor="white"
                    boldNumber="800"
                    title='Detect Crop'
                    onPress={apiCall} />
                <Text style={styles.text}>{crop}</Text>
            </View>
        </View >
        //</ImageBackground>
    )
}
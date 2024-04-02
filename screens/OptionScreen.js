import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserData } from '../Contexts/UserData'
import NextButton from "../components/NextButton";
import { View, SafeAreaView, Button, Text } from "react-native";


export default function OptionScreen({ navigation }) {
    const { option, setOption } = useContext(UserData)
    console.log("hello")
    return (
        <SafeAreaView>
            <Text>Hi</Text>
            <View style={styles.buttonWrapper}>
                <NextButton
                    title={'Crop Prediction'}
                    test={1}
                    onPress={() => {
                        navigation.navigate("CropPredictions");
                    }}
                />
                <NextButton
                    title={'Fertilizer Prediction'}
                    test={2}
                    onPress={() => {
                        navigation.navigate("FertilizerPredictions");
                    }}
                />
                <NextButton
                    title={'Smart Irrigation'}
                    test={3}
                    onPress={() => {
                        navigation.navigate("SmartIrrigation");
                    }}
                />
            </View>
        </SafeAreaView>
    );
}
const styles = {
    buttonWrapper: {
        marginTop: 100,
    },
};
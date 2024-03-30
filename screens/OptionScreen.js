import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserData } from '../Contexts/UserData'
import NextButton from "../components/NextButton";
import { View, SafeAreaView, Button, Text } from "react-native";
// const crop_pre = {
//     id: 1,
//     name: "Crop Prediction",
//     image: require("../assets/images/crop.png"),
// };

// const ferti_pre = {
//     id: 2,
//     name: "Fertilizer",
//     image: require("../assets/images/fert.png"),
// };

export default function OptionScreen({ navigation }) {
    const { option, setOption } = useContext(UserData)
    console.log("hello")
    return (
        <SafeAreaView>
            <Text>Hi</Text>
            <View style={styles.buttonWrapper}>
                <NextButton
                    width={150}
                    height={60}
                    onPress={() => {
                        navigation.navigate("CropPredictions");
                    }}
                /></View>
            <NextButton
                width={150}
                height={60}
                onPress={() => {
                    navigation.navigate("FertilizerPredictions");
                }}
            />
        </SafeAreaView>
    );
}
const styles = {
    buttonWrapper: {
        marginTop: 10,
    },
};
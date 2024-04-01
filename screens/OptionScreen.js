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

                    title={'Crop Prediction'}
                    onPress={() => {
                        navigation.navigate("CropPredictions");
                    }}
                />
                <NextButton

                    title={'Fertilizer Prediction'}
                    onPress={() => {
                        navigation.navigate("FertilizerPredictions");
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
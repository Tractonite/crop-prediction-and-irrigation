import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  onPress,
  Image
} from "react-native";
import React from "react";
const crop_pre = {
  id: 1,
  name: "Crop Prediction",
  image: require("../assets/images/crop.png"),
};

const ferti_pre = {
  id: 2,
  name: "Fertilizer",
  image: require("../assets/images/ferti.png"),
};
export default function NextButton({
  style,
  width = 250,
  height = 75,
  fontSize = 25,
  title,
  test,
  center = true,
  backgroundColor = "#F1F2EC",
  onPress,
}) {
  const styles = StyleSheet.create({
    btnStyle: {
      width,
      height,
      borderRadius: 16,
      backgroundColor,
      marginTop: 50,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: center ? "center" : "auto",
      elevation: 5,
      ...style,
    },
    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },
  });
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.btnStyle}
      onPress={(e) => onPress(e)}
    >
      <Image source={test == 1 ? crop_pre.image : ferti_pre.image} style={styles.buttonImageIconStyle} />
      <Text style={{ fontSize, fontWeight: 500 }}>{title}</Text>
    </TouchableOpacity>
  );
}
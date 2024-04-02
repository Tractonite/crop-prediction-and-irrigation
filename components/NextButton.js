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

const smart_irri = {
  id: 3,
  name: "Smart Irrigation",
  image: require("../assets/images/smart_irrigation.png"),
}
export default function NextButton({
  style,
  width = 250,
  height = 75,
  fontSize = 25,
  title,
  textColor,
  boldNumber,
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
    textStyle: {
      fontSize,
      color: textColor, // Set text color
    },
  });
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.btnStyle}
      onPress={(e) => onPress(e)}
    >
      <Image
        source={
          test === 1 ? crop_pre.image :
            test === 2 ? ferti_pre.image :
              test === 3 ? smart_irri.image :
                defaultImage
        }
        style={styles.buttonImageIconStyle}
      />      
      <Text style={{ color: textColor, fontSize, fontWeight: boldNumber }}>{title}</Text>
    </TouchableOpacity>
  );
}
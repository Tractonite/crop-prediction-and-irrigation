import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  onPress,
} from "react-native";
import React from "react";

export default function NextButton({
  style,
  width = 200,
  height = 75,
  fontSize = 25,
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
      alignItems: "center",
      justifyContent: "space-around",
      alignSelf: center ? "center" : "auto",
      elevation: 5,
      ...style,
    },
  });
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.btnStyle}
      onPress={(e) => onPress(e)}
    >
      <View>
        <Text style={{ fontSize, fontWeight: 500 }}>Next</Text>
      </View>
    </TouchableOpacity>
  );
}

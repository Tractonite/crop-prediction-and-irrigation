import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
export default function TextIn(lol) {
    return (
        <TextInput
            onChangeText={setPH}
            style={styles.input}
            placeholder='Input pH value'
        />)
}
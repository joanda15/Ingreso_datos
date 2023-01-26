import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, } from 'react-native';
import { LinearGradient } from "react-native-svg";
// import { LinearGradient } from "expo-linear-gradient";

export default function ButtonGradient () {
    return (
        <TouchableOpacity>
            <LinearGradient
            // Button Linear Gradient
            color={['#4c669f', '#3b5998', '#192f6a']}
            style={style.button}>
                <Text style={style.text}>Enviar</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    text: {
        fontSize: 14,
        color: 'gray',
        marginTop: 20
    },
    button: {
        color: '#fff',
    },
});
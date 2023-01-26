import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import ButtonGradient from './ButtonGradient';

const { width, height } = Dimensions.get('window')

export default function App() {
  return (
    <View style={styles.mainContainer}>

      {/* <View style={styles.containerSvg}>
        <SvgTop/>
      </View> */}

      <View style={styles.container}>
        <Text style={styles.titulo}>Calcular </Text>
        <Text style={styles.subTitulo}>Cantidad de pescado en libras a precio </Text>
        <TextInput
          placeholder='introduce el peso en libras'
          style={styles.TextInput}
        />
        <TextInput
          placeholder='precio del pescado'
          style={styles.TextInput}
        />
        <Text style={styles.titulo}>Ingresa </Text>
        <ButtonGradient/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSvg: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 70,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitulo: {
    fontSize: 20,
    color: 'gray',
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
  },
  button: {

  },
});

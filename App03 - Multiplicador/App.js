import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { styles } from './styles';


function App(){
  const [num, setNum] = useState('')
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  function entrar(){
    if (input1=='' || input2==''){
      alert('Por favor digite os números!')
      return;
    }
    setNum('Resultado da multiplicação: '+ input1*input2);
  }

  return(
    <View style={styles.area}>
    <TextInput
    style={styles.input}
    placeholder="Digite um número"
    onChangeText={setInput1}
    />
    <TextInput
    style={styles.input}
    placeholder="Digite outro número"
    onChangeText={setInput2}
    />


    <Button title="Calcular" onPress={entrar} />
    <Text style={styles.texto}> {num} </Text>
    </View>
  );
}
export default App;
import React, { Component, useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, Button} from 'react-native';
import { styles } from './styles';


function App(){
  const [num, setNum] = useState('')
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  cal=input1/input2

  function entrar(){
    if (input1=='' || input2==''){
      alert('Por favor digite os valores!')
    }else if(cal<0.7){
      setNum('A melhor opção é o alcool (preço: R$'+cal+')')
      return;
    }else if(cal>0.7){
      setNum('A melhor opção é a gasolina (preço: R$'+cal+')')
      return;
    }else if(input1==input2){
      setNum('Os valores são iguais')
      return;
    }
  }

  return(
    <View style={{alignItems: 'center'}}>
      <Image
          source={{uri:'https://leismunicipais.com.br/noticias/wp-content/uploads/2013/10/201310161-1.jpg'}}
          style={{ width: 300, height: 200}}
        />
    <TextInput
    style={styles.input}
    placeholder="Preço do Alcool"
    onChangeText={setInput1}
    />
    <TextInput
    style={styles.input}
    placeholder="Preço da Gasolina"
    onChangeText={setInput2}
    />


    <Button title="Verificar" onPress={entrar} />
    <Text style={styles.texto}> {num} </Text>
    </View>
  );
}
export default App;
import React, { Component, useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, Button} from 'react-native';
import { styles } from './styles';


function App(){
  const [num, setNum] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  imc=peso/(altura*altura)
  imc=imc.toFixed(2)

  function entrar(){
    if (peso=='' || altura==''){
      alert('Por favor digite os dois valores!')
    }else if(imc<18.5){
      setNum('Classificação: Abaixo do peso ('+imc+')')
      return;
    }else if(imc>18.5&&imc<24.9){
      setNum('Classificação: Peso Normal ('+imc+')')
      return;
    }else if(imc>25&&imc<29.9){
      setNum('Classificação: Sobrepeso ('+imc+')')
      return;
    }else if(imc>30&&imc<34.9){
      setNum('Classificação: Obesidade Grau I ('+imc+')')
      return;
    }else if(imc>35&&imc<39.9){
      setNum('Classificação: Obesidade Grau II ('+imc+')')
      return;
    }else if(imc>=40){
      setNum('Classificação: Obesidade Grau III ou Mórbida ('+imc+')')
      return;
    }
  }

  return(
    <View style={{alignItems: 'center'}}>
      <Image
          source={{uri:'https://guiadafarmacia.com.br/wp-content/uploads/2021/02/corpo-imc.jpg'}}
          style={{ width: 300, height: 200}}
        />
    <TextInput
    style={styles.input}
    placeholder="Valor do Peso"
    onChangeText={setPeso}
    />
    <TextInput
    style={styles.input}
    placeholder="Valor da Altura"
    onChangeText={setAltura}
    />


    <Button title="Verificar" onPress={entrar} />
    <Text style={styles.texto}> {num} </Text>
    </View>
  );
}
export default App;
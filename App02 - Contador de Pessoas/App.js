import React, { useState } from 'react';
import {Text,View,StyleSheet} from 'react-native'

import Botao from './src/button'
import Texto from './src/texto'

export default function App(){
  const [qtdPessoa, setQtdPessoa] = useState(0)
  function adicao(){
    setQtdPessoa(qtdPessoa+1)
  }
  function subtracao(){
    setQtdPessoa(qtdPessoa-1)
  }
  function zerar(){
    setQtdPessoa(0)
  }
  return(
  <View>
    <Texto nome = {'Contador de Pessoas'}/>
    <Text style={{fontSize: 50, textAlign: 'center'}}>{qtdPessoa}</Text>
    <Botao  nome = {'Adicionar'} cor = {'green'} funcao={adicao}/>
    <Botao  nome = {'Subtrair'} cor = {'red'} funcao={subtracao}/>
    <Botao  nome = {'Resetar'} cor = {'black'} funcao={zerar}/>
  </View>
  )
}


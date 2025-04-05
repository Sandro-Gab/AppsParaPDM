import {StyleSheet,View, Button, Text} from 'react-native'

function Botao(props){
  return(
    <View style={styles.contorno}>
      <Button title={props.nome} color={props.cor} onPress={props.funcao} /> 
    </View>
    )
}

const styles = StyleSheet.create({
  contorno:{
    marginTop: 20,
    marginStart: 15,
    marginEnd: 15,
    }
  })

export default Botao;
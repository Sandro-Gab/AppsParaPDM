import { Text,View,StyleSheet,Image } from 'react-native';

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        App Perfil profissional
      </Text>
      <View style={{alignItems: 'center'}}>
      <Image
          source={{uri:'https://preview.redd.it/i-am-steve-v0-5rqwn6abn8pd1.png?width=238&format=png&auto=webp&s=e99fac9da9b3e36493a2e03cf2535454c7b072bd'}}
          style={{ width: 300, height: 300}}
        />
        </View>
      <Text style={styles.subtitle}>
        Dados pessoais 
      </Text>
      <Text style={styles.normal}>
        Nome: Jack Black "Steve"
      </Text>
      <Text style={styles.normal}>
       Idade: 55
      </Text>
      <Text style={styles.normal}>
       Descrição: Um homem clinicamente insano que veste um suéter azul e diz ser o "Steve" e viver em seu "mundo do Minecraft". Ele era conhecido por ser um ator e músico.
      </Text>
      <Text style={styles.subtitle}>
        Formação
      </Text>
      <Text style={styles.normal}>
        Ator, compositor, músico, comediante e dublador.
      </Text>
      <Text style={styles.subtitle}>
        Experiência
      </Text>
      <Text style={styles.normal}>
       Um Filme Minecraft (filme), Kung Fu Panda (franquia), Tenacious D (álbum), etc.
      </Text>
      <Text style={styles.subtitle}>
        Projetos
      </Text>
      <Text style={styles.normal}>
       "Steve" alega ter alguns projetos em seu "mundo do Minecraft" (o hospício onde está internado), que incluem:
      </Text>
      <Text style={styles.normal}>
        Terraformar uma montanha, secar a lava do Nether, conseguir a conquista "A que ponto chegamos?", dentre outros.
      </Text>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  normal: {
    fontSize: 14,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

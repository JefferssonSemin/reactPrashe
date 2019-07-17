import React from 'react';
import { Text, AppRegistry, View, Button, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
  principal: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  botao: {
    paddingVertical: 10,
    paddingHorizontal:40,
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6
  },
  textoBotao: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',

  },
  imagem: {
    justifyContent: 'flex-end',
    padding: 5
  }
};

const botaoPressionado = () => {
var numeroAleatorio = Math.random();
numeroAleatorio = Math.floor(numeroAleatorio * 5);

var frases = Array();
frases[0] = 'Boa sorte';
frases[1] = 'Bom dia';
frases[2] = 'Boa noite';
frases[3] = 'Boa s';
frases[4] = 'Tchau';

var frasesEscolhidas = frases[numeroAleatorio];

Alert.alert(frasesEscolhidas);
}

const App = () => {
  const { principal, botao, textoBotao } = Estilos;
  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity style={botao} onPress={botaoPressionado}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('reactApp1', () => App);
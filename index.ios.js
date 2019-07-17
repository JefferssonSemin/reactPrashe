import React from 'react';
import { Text, AppRegistry } from 'react-native';

const Estilos = {
  estiloTexto: {
    fontSize: 50
  }
};


const App = () => {
  return (
    <Text style={Estilos.estiloTexto}>Phrases of the day</Text>
  );
};

AppRegistry.registerComponent('reactApp1', () => App);
import React, {useState, Component} from 'react';
import Boton from './componentes/botoncontador.js';
import Visor from './componentes/visor.js';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(props) {

  const [count, setCount] = useState(0)

    function suma(){
      setCount(count + 1)
    }

    function resta(){
      setCount(count - 1)
    }

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Boton label='-' action={resta}></Boton>
        <Visor props={contador=count, estilos=styles}></Visor>
        <Boton label='+' action={suma}></Boton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#00cec9',
      justifyContent: 'center',
    },
    subcontainer:{
      height: 50,
      width: '100%',
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
    contadorContainer:{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contador:{
     fontSize: 40,
     color: 'white',
     fontWeight: 'bold',
    },
  });

export default App;

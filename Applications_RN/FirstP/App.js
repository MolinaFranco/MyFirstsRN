import React, {useState, Component} from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import CustomButton from './components/customButton.js';

//ccs
function App(props) {

const [count, setCount] = useState(0);

  function handleUp(){
    setCount(count + 1)
  }

  return (
     <View style={styles.container}>
       <View style={styles.subcontainer}>
        <CustomButton label='-' action={() => setCount(count-1)}/>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>{count}</Text>
        </View>
        <CustomButton label='+' action={handleUp}/>
       </View>
     </View>   

    );
  }

//rnss
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
   counterContainer:{
     flex: 1,
     backgroundColor: 'black',
     justifyContent: 'center',
     alignItems: 'center',
   },
   counter:{
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
   },
 });

 export default App;
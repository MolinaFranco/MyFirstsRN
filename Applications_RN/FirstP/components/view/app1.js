import React from 'react';
import {View, Text, StyleSheet, ViewComponent, ViewPagerAndroid} from 'react-native';
import Viewer from './components/view'
//const App = () => {
//  return (
//    <View style={styles.container}>    
//    </View>
//  );
//};

//function App(){
//  return(
//  );
//}

class App1 extends Component{
  render(){
    return(
      <View style={style.contreiner1}>
        <Text style={styles.text}>
        Hello World!!!!!!
        </Text>
        <View style={{  width: 100, height: 100, backgroundColor: 'red' }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'green',
    fontSize: 35,
  },
  contreiner1:{
    flex:1, 
    justifyContent: "center", 
    alignContent: "center", 
    flexDirection: "row", 
    backgroundColor: 'blue' }
  }
)
 

export default App1;
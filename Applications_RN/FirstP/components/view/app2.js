import React from 'react';
import {View, Text, StyleSheet, ViewComponent, ViewPagerAndroid, TouchableOpacity} from 'react-native';

//ccs
class App extends Component {
 constructor(props){
    super(props);
    
    this.state = {
      counter: 0,
    };
    
    this.handleUp = this.handleUp.bind(this);
    this.handleUp = this.handleDown.bind(this);
  }

  handleUp(){
    const {counter: ct} = this.state;
    //funcion que modifica el estad, funcion callback despues de modificar el estado
    this.setState({counter: ct + 1, 
      () => this.setState({counter: 0})
    })
  }

  handleDown(){
    const {counter: ct} = this.state;
    this.setState({counter: ct - 1})
  }
 
 
  render() {
   const {counter} = this.state;
   return (
     <View style={style.container}>
       <View style={style.subcontainer}>
        <TouchableOpacity style={styles.btn} onPress={this.handleUp}> 
          <Text style={style.btnText}>-</Text>
        </TouchableOpacity>
        <View style={style.counterContainer}>
          <Text style={style.counter}>{counter}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.handleDown}>
          <Text style={style.btnText}>+</Text>
        </TouchableOpacity>
       </View>
     </View>   
     
    );
  }
}

//rnss
 const styles = StyleSheet.create({
   container:{
     flex= 1,
     backgroundColor= '#00cec9',
     justifyContent= 'center',
   }
   subcontainer:{
     height: 50,
     width= '100%',
     paddingHorizontal= 10,
     flexDirection: 'row',
   }
   btn:{
     height: 50,
     width: 50,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#dfe6e9'
   }
   btnText:{
     fontSize= 25,
     color: 'black',
     fontWeight: 'bold',
   }
   counterContainer:{
     flex: 1,
     backgroundColor: ''
     justifyContent: 'center',
     alignItems: 'center',
   }
   counter:{
    fontSize= 40,
    color: 'white',
    fontWeight: 'bold',
   }
 });

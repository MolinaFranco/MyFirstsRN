import React, {useState} from 'react';
import {View,Text, Image,FlatList, StyleSheet, Alert} from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {

  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'something'}
  ]);

  const deletItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please enter some text', [
        { text: "OK", onPress: () => console.log("OK Pressed") }
        ])}
    else{setItems(prevItems => {
      return [...prevItems, {id: uuidv4(), text}]
    });
  }
  }

  return(
    <View style={styles.container}>
      <Header tittle= 'Shopping List'/> 
      <AddItem addItem={addItem}></AddItem>
      <FlatList 
        data= {items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deletItem}></ListItem>}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,
     paddingTop: 60,
    },  
});

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default App;

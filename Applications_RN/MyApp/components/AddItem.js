import React, {useState} from 'react';
import {View,Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const AddItem = (props) => {
  
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);

  const add = () => {
    props.addItem(text);
    setText('');
  };
  
  return(
    <View>
      <TextInput id='input_text' placeholder='Agregar un Item...'
      style={styles.input} onChangeText={onChange} value={text}/>
      <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText} onPress={add}>
              <Icon name= 'plus' size={20} ></Icon>
              Add Item
          </Text>
      </TouchableOpacity>
      
    </View>

  )
}


const styles = StyleSheet.create({
    imput:{
        height: 60,
        fontSize: 23,
        padding: 8,
    },
    btn:{
        backgroundColor: '#913646',
        padding: 9,
        margin:5,
    },
    btnText:{
        color: '#350000',
        fontSize: 20,
        textAlign: 'center',
    }

});

export default AddItem;

import React from 'react';
import {View,Text, Image, StyleSheet, FlatList} from 'react-native';

const Header = (props) => {
  return(

    <View style={styles.header}>
      <Text style={styles.text}>{props.tittle}</Text>
    </View>

  )
}

Header.defaultProps = {
    tittle: 'tittle',
}

const styles = StyleSheet.create({
  header:{
      height: 60,
      padding: 15,
      backgroundColor: '#5f021f',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{
        color: '#ffffff',
        fontSize: 23,
        textAlign: 'center',
    }
});

export default Header;

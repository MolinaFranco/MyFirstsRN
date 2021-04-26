import React from 'react';
import {View, Text, StyleSheet, ViewComponent, ViewPagerAndroid, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

function CustomButton(props) {
    const { label, action } = props;
    return (
        <TouchableOpacity style={style.btn} onPress={action}> 
          <Text style={style.btnText}>{label}</Text>
        </TouchableOpacity>
    );
};

CustomButton.propType = {
  label: PropTypes.string,
  action: PropTypes.func.isRequired,
}

CustomButton.defaultprop = {
  label: "hola",
}



const style = StyleSheet.create({
    btn:{
      height: 50,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dfe6e9'
    },
    btnText:{
      fontSize: 25,
      color: 'black',
      fontWeight: 'bold',
    }
  });


  export default CustomButton;
 
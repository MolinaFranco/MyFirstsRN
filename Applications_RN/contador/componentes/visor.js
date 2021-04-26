import React from 'react';
import {View, Text, StyleSheet, ViewComponent, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

function Visor(props) {
    return(
        <View style={estilos.contadorContainer}>
            <Text style={estilos.contador}>{contador}</Text>
        </View>
    )
};

export default Visor;


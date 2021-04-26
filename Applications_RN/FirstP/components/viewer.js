import React, { PureComponent } from 'react';
import { View, StyleSheet} from 'react-native';

function Viewer() {
    return(
        <View style={styles.container} />
    );
}

const styles = StyleSheet.create({
    container:{
        height: 40,
        width: '100%',
    }
})

export default Viewer;
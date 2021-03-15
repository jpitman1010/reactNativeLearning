import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, TouchableOpacity } from 'react-native';



const Generate = ({add}) => (
    <View style={styles.generate}>
        <TouchableOpacity
            onPress={()=> add()}
            underlayColor="blue"
            activeOpacity={0.1}
            onHideUnderlay={()=>alert('hide')}>
            <Text style={{color:'#fff'}}>Add Number</Text>  
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    generate: {
        backgroundColor:'#00BCD4',
        alignItems: 'center',
        padding: 10,
        width: '30%',
        
    }
})

export default Generate;
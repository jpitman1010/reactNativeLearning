import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, 
    TouchableOpacity, Pressable } from 'react-native';



const Generate = ({add}) => (
    <View style={styles.generate}>
        <Pressable
            onPress={()=> add()}
           >
            <Text style={{color:'#fff'}}>Add Number</Text>  
        </Pressable>
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
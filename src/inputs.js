import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';



const Inputs = () => {
    const [myInput, setMyInput] = useState('');

    const onChangeInput = (event) => {
        setMyInput(event);
    }
    
    const [emailInput, setEmailInput] = useState('');

    const onChangeEmailInputs = (event) => {
        setEmailInput(event);
    }

    return(
        <View>
            <TextInput
                value={myInput}
                style={styles.inputs}
                onChange={(e)=> onChangeInput(e)}
                multiline={true}
                placeholder="Phone Number"
                keyboardType={'number-pad'}
            >
            </TextInput>
            <TextInput
                value={myInput}
                style={styles.inputs}
                onChange={(e)=> onChangeEmailInputs(e)}
                multiline={true}
                placeholder="Email"
                keyboardType={'email-address'}
                >
            </TextInput>
            </View>
    )}

const styles = StyleSheet.create({
    inputs: {
        backgroundColor:'#f2f2f2',
        alignItems: 'center',
        padding: 10,
        marginTop:20,
        width: '100%',
        padding:10,
        fontSize:20,
        
    }
})

export default Inputs;
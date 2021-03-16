import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';



const Inputs = () => {
    // const [myInput, setMyInput] = useState('');

    // const onChangeInput = (event) => {
    //     setMyInput(event);
    // }
    
    const [emailInput, setEmailInput] = useState('');

    const onChangeEmailInputs = (event) => {
        setEmailInput(event);
    }

    const [names, setNames] = useState(['John', 'Jacob', 'Jingle-Hymer-Schmidt'])

    const onAddUser  = () => {
        const newState = [...names, emailInput];
        setNames(newState);
        setEmailInput('');
    }

    return(
            <>
            {/* <TextInput
                value={myInput}
                style={styles.inputs}
                onChange={(e)=> onChangeInput(e)}
                multiline={false}
                placeholder="Phone Number"
                keyboardType={'number-pad'}
                numberOfLines={1}
            >
            </TextInput> */}
            <TextInput
                value={emailInput}
                style={styles.inputs}
                onChange={(e)=> onChangeEmailInputs(e) }
                multiline={false}
                keyboardType={'email-address'}
                numberOfLines={1}
                
            />
            <View style={styles.buttons}>
            <Button
            title="Add User"
            onPress={onAddUser}
            />
            </View>
            <View >
                
                {names.map(name=>(
                    <Text key={name}>{name}</Text>
                ))}
            </View>
            </>
    )}

const styles = StyleSheet.create({
    inputs: {
        backgroundColor:'#f2f2f2',
        alignItems: 'center',
        padding: 10,
        marginTop:20,
        width: '100%',
        fontSize:20,
        
    },
    buttons: {
        backgroundColor:'#f2f2f2',
        padding:10,
        fontSize:20,
        color: "black",
        borderColor:"black",
        padding: 10,
        margin:2,
        width: '40%',
        marginLeft:'30%',
    },
    user: {
        backgroundColor:'white',
        color: 'black',
        fontSize:20,
        borderColor: 'pink',
        
    }
})

export default Inputs;
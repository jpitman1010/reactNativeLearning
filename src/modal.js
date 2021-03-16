import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Modal } from 'react-native';


// modals occupy 100% of the screen
const ModalComponent = () => {
   const [modal,setModal] = useState(false);
    const handleModal = () => {
        setModal(!modal);
    }
    return(
            <View style={styles.modal}>
        <Modal
        visible={modal}
        >
            <View style={{marginTop:50}}>
                <Text> My Model Component that opens after button click.</Text>
                <Button
                title="Close Modal"
                onPress={handleModal}
                />
            </View>
        </Modal>
                <Button
                title="Open Modal"
                onPress={handleModal}
                />
            </View>
    )}

const styles = StyleSheet.create({
    modal: {
        backgroundColor:'#f2f2f2',
        alignItems: 'center',
        padding: 10,
        marginTop:20,
        width: '100%',
        fontSize:20,
        
    },
  
})

export default ModalComponent;
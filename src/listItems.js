import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';



const ListItems = ({items}) => {
    return(
        items.map((item) => (
        <View style={styles.listItem}>
            <Text>{item}</Text>
        </View> 
    ))
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor:'#cecece',
        alignItems: 'center',
        padding: 10,
        marginTop:5,
        width: '100%',
        
    }
})

export default ListItems;
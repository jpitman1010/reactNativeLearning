import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';



const ListItems = ({items, remove}) => {
    return(
        items.map((item,i) => (
            <Pressable
            onPress={() => remove(i)}

            >
                <View 
                key={item}
                style={styles.listItem}>
                    <Text>{item}</Text>
                </View> 
        </Pressable>
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
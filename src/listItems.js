import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';



const ListItems = ({items}) => {
    return(
        items.map((item,i) => (
            <Pressable
            onPress={() => alert('fast press occurred')}
            onLongPress={() => alert('long press occurred')}
            onPressIn={() => alert('pressing button in')}
            onPressOut={() => alert('releasing button press')}

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
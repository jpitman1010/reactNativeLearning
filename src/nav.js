import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';



const Nav = ({nameOfApp}) => (
    <View style={styles.nav}>
        <Text>
            {nameOfApp}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    nav: {
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 20,
        width: '100%',
        
    }
})

export default Nav;
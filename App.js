import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Nav from './src/nav'
import Generate from './src/generate'
import ListItems from './src/listItems';

const App = () => {
  const [random,setRandom] = useState([20,55]);
// const [hello,setHello] = useState(true);

// useEffect(()=> {
//   setTimeout(()=>{
//     setHello(false)
//   }, 2000)
// },[])

  onAddRandom = () => {
    const randomVal = Math.floor(Math.random() * 100) +1; 
    const newState = [...random,randomVal];
    setRandom(newState) 
  }

  return(
    <View>
      <View style={styles.mainView}>
        <Nav nameOfApp="Awesome App"/>
      </View>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>
          Text for View 1
        </Text>
      </View>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>
          Text for View 2
        </Text>
      </View>
      {/* {hello ?
      <Text>
        Hello Everybody
      </Text> :null} */}
      <View>
      <Generate add={()=> onAddRandom()}/>
      </View>
      <ListItems items={random}/>
    </View>
  )
}
 

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 100,
    backgroundColor:'red',
    alignItems: 'flex-start', //centers x axis
    justifyContent: 'flex-start', //centers y axis
  }, 
  basicText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    padding:20,
  }, 
  basicView: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 5,
  }

})

//google reactNative cheat sheet and it will show gitHub project that gives info and cheat sheet on all of these settings



export default App;
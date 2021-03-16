import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, Image, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Nav from './src/nav'
import Generate from './src/generate'
import ListItems from './src/listItems';
import Inputs from './src/inputs';
import EIB from './src/assets/IMG_74.png';

const App = () => {
  const [random,setRandom] = useState([20,55]);
// const [hello,setHello] = useState(true);

// useEffect(()=> {
//   setTimeout(()=>{
//     setHello(false)
//   }, 2000)
// },[])

  const onAddRandom = () => {
    const randomVal = Math.floor(Math.random() * 100) +1; 
    const newState = [...random,randomVal];
    setRandom(newState) 
  }

  const onItemRemove = (position) => {
      const newArray = random.filter((item,i) =>{
        return position !== i;
      });
      setRandom(newArray);
  }

  return(
    <KeyboardAwareScrollView
            style={{ backgroundColor: '#4c69a5' }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}>
      <View style={styles.mainView}>
        <Nav nameOfApp="Awesome App"/>
    <ScrollView 
    // onContentSizeChange={(w,h)=>alert(h)}
    // onMomentumScrollBegin={()=>alert('started scrolling')}
    onScroll={(e)=>console.log(e)}

    style={{width:'100%'}}>
      
    <ImageBackground
    source={EIB}
    style={styles.eib}>


      {/* <Image
      // resizeMode={'contain'}
      width={"100%"}
      height={400}
      source={{uri: 'https://picsum.photos/400/400'}}
      // source={EIB}
      // style={styles.eib}
      /> */}
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
      <ListItems items={random} 
      remove={(pos)=>onItemRemove(pos)}/>
      <View>
        <Inputs/>
      </View>
        </ImageBackground>
      </ScrollView>
        </View>
        <ActivityIndicator animating={false}/> 
        {/* unmounts component when set to false.  so it only shows up when you set it to true */}
    </KeyboardAwareScrollView>
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
  },
  eib: {
    width:'100%',
    height: 500,
    marginTop:20,
  }

})

//google reactNative cheat sheet and it will show gitHub project that gives info and cheat sheet on all of these settings



export default App;
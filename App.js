import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

import 

const App = () =>{
  
  const toggle = false

  return (
    <View style={toggle ? style.containerLight : style.containerDark}>

      <Image 
        style={ toggle ? style.lightingOn : style.lightingOff}  
        source={
          toggle
          ? require('./assets/icons/eco-light.png')
          : require('./assets/icons/eco-light-off.png')
        }
      />
    </View>
  )
}


export default App

const style = StyleSheet.create({
  containerDark:{
    flex: 1,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center'
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center'
  },
  lightingOn:{
    resizeMode:'contain',
    alignSelf:'center',
    width:150,
    height:150
  },
  lightingOff:{
    tintColor:'white',
    resizeMode:'contain',
    alignSelf:'center',
    width:150,
    height:150
  }
})
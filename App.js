import React from 'react'
import {View, StyleSheet, Image,TouchableOpacity} from 'react-native'

const App = () =>{
  
  const toggle = false

  return (
    <View style={toggle ? style.containerLight : style.containerDark}>
      <TouchableOpacity onPress={()=>{}}>
        <Image 
          style={ toggle ? style.lightingOn : style.lightingOff}  
          source={
            toggle
            ? require('./assets/icons/eco-light.png')
            : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image 
          style={style.dioLogo}  
          source={
            toggle
            ? require('./assets/icons/logo-dio.png')
            : require('./assets/icons/logo-dio-white.png')
          }
        />
      </TouchableOpacity>
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
  },
  dioLogo:{
    resizeMode:'contain',
    alignSelf:'center',
    width:250,
    height:250
  }
})
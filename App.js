import React, {useState,useEffect} from 'react'
import {View, StyleSheet, Image,TouchableOpacity, Alert} from 'react-native'
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'

const App = () =>{
  
  //const toggle = false

  const [toggle, setToggle] = useState(false)

  const handleChangeToggle = () => setToggle((oldToggle)=>{
    return !oldToggle
  })

  useEffect(() =>{
    //Liga flash do celular

    //Alert.alert('Atualizou o componente ' + toggle)

    Torch.switchState(toggle)
    console.log('Trocou estado do flash')

    },[toggle])


    useEffect(() =>{
      // Quando o celular for chacoalhado mudaremos o toggle

      const subscription = RNShake.addListener(() =>{
        //Diz o que fazer com esse evento
        setToggle((oldToggle)=>{
          return !oldToggle
        })
      })

      //Essa função vai ser chamada quando o componente for desmontado
      //Removendo o ouvinte do evento
      return () => subscription.remove()
    },[])


  return (
    <View style={toggle ? style.containerLight : style.containerDark}>
      <TouchableOpacity onPress={ handleChangeToggle
        //toggle = !toggle
        //console.log(toggle)
      }>
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
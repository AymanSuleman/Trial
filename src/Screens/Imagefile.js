import { View, Text , SafeAreaView,StyleSheet,Image} from 'react-native'
import React from 'react'

const Imagefile = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Image  source ={require('./Logotype.png')} style={styles.img}/>
      <Text style={styles.version}>App version 1.24.0</Text>
    </SafeAreaView>
    
  )
}

const styles= StyleSheet.create({
  container:
  {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'


  },
  version :
  {
    bottom: -360,

  }
})

export default  Imagefile
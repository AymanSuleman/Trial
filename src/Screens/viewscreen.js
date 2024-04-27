import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

const viewscreen = () => {
  return (
    <View style={style.container} >
      <Text style={style.Text}>viewscreen</Text>
    </View>
  )
}
 const style= StyleSheet.create({
  container :
  {
    flex: 1,   
    justifyContent: 'center' ,  
    backgroundcolor: 'black',
    alignItems: 'center',
  },
  Text:
  {
    color: 'red',
    fontSize: 20,
  }

 })
export default viewscreen
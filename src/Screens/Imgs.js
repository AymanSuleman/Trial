import { View, Text ,Image , StyleSheet} from 'react-native'
import React from 'react'

const img = () => {
  return (
    <View style={styles.container}>
       <Image source ={require('./img2.jpg.png')} style={styles.img}/>
        <Image source ={require('./img1.jpg.png')} style={styles.img1}/>
      <Text></Text>
    </View>
  )
}
const styles= StyleSheet.create(
  {
    container:
    {
      flex : 1,
      alignItems:'center'
    },
     img:
     {
      resizeMode:'center',
        width: 400,
        height: 300,
        bottom: -170,
     },
    img1:
    {
      resizeMode:'center',
        width: 400,
        height: 200,
        bottom: -220,
    }
  }
)
export default  img
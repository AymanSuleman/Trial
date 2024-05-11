import { View, Text, SafeAreaView ,Image,StyleSheet, TouchableOpacity,} from 'react-native'
import React from 'react'

const Random = () => {
  return (
    <SafeAreaView >
      
      <Image source={require('./credit.jpg') }style={styles.img}/>
      <View style={styles.block} >
          <Text style={styles.text}> Easy Transfers in a few taps</Text>
          <Text style={styles.text1}>Transfer and receive money as easily as possible and keep track of your expenses in details and great goals.</Text>
        <TouchableOpacity style={styles.btn} >
            <Text style={styles.btntext}>Get Started</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
  img:
  {
    width:420,
    height:600,

  },
  block:
  {
    marginTop:-180,
    borderRadius:40,
    backgroundColor:'#fff',
    borderRadius:40,
     
  },
  text:
  {
    marginHorizontal:40,
    marginTop:50,
    fontSize:32,
    fontWeight:'700',
    color:'black',
    textAlign:'center',
  },
text1:
{
  marginHorizontal:40,
   fontSize:24,
   color:'black',
   fontWeight:'500',
   textAlign:'center',
   marginTop:40,
},
btn:
{
  marginHorizontal:70,
  marginTop:40,
  backgroundColor:'blue',
  borderRadius:30,
  height:60,
  width:'60%',
},
btntext:
{
     marginTop:10,
    textAlign:'center',
    color:'white',
    fontSize:22,
},

})
export default Random
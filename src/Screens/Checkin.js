import { View, Text, SafeAreaView,StyleSheet ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Checkin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./Mental-Wellness-1-scaled-1.jpg')} style={styles.img}/>
      <View style={styles.textcontainer}>
      <View>
      <Text style={styles.header}>Session  Check-In</Text>
      <Text style={styles.header2}> Reflect  on your fellings </Text>
      </View>
      <View>
          <Text style={styles.body}>Take a moment and answer a few questions before moving to the next exercise .</Text>
      </View>
      <TouchableOpacity  style={styles.btn1}>
        <Text style={styles.btn1text}>Start Check-In</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.btn2}>
        <Text style={styles.btn1text}>Later</Text>
      </TouchableOpacity>
      <View  >
        <Text style={styles.footer} >Note that you won't be able to proceed to the next touch session unless you complete the check-in.</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
  container:
  {
    flex:1,
    backgroundColor:'#0070BB',
    alignItems:'center',
  },
  img:
  {
    width:420,
    height:370,
    // marginTop:120,
    // borderBottomEndRadius:50,
    
  },
  textcontainer:
  {
    marginHorizontal:24,
    alignItems:'center',
    backgroundColor:'#0070BB',
    
  },
  header:
  {
    marginTop:10,
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
    
  },
  header2:
  {
     marginTop: 20,
     fontSize:18,
     color:'black',
     fontWeight:'bold',
  },
  body:
  {
    marginTop: 20,
    fontSize:18,
    color:'black',
    fontWeight:'bold',
  },
btn1:
{
  backgroundColor:'#003262',
     width: 300,
     height:46,
     justifyContent:'center',
     alignItems:'center',
     marginTop:40,
     borderRadius:25,
},
btn1text:
{
    fontSize:18,
    fontWeight:'500',
    color:'white',
},
btn2:
{
  backgroundColor:'#003262',
  width: 300,
  height:46,
  justifyContent:'center',
  alignItems:'center',
  marginTop:20,
  borderRadius:25,
},
footer:
{
  marginTop:20,
  fontSize:16,
  fontWeight:'500',
  color:'black',

},

});
export default Checkin
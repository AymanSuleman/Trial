import { View, Text, SafeAreaView,StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const Login2 = (navigation) => {
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.headtext}>Coursera</Text>
 
      <View style={styles.txtcontainer} >
        <Text style={styles.titletext}>Welcome Back..</Text>
        <Text style={styles.titletext2}>You can Search,Apply Course and find Scholarship for Studies.</Text>
      </View>

<View style={styles.formcontainer}>
<View style={styles.inputcontainer}>
<Text style={styles.inputtext}> Email</Text>
<TextInput style={styles.input} placeholder='Enter Email'></TextInput>
</View>
<View>
<Text style={styles.inputtext}>Password</Text>
 <TextInput style={styles.input} placeholder='Passwword'></TextInput>
</View>

  <TouchableOpacity onPress={()=> {alert('Forget Clicked')}}>
    <Text style={styles.forget} >Froget Password? </Text>
  </TouchableOpacity>

  <TouchableOpacity  style={styles.btn} onPress={()=> {alert('Submit sucessfully')}}>
    <Text style={styles.btntext}>Sign Up</Text>
  </TouchableOpacity>
</View>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({

  container:
  {
    flex:1,
    backgroundColor:'white',
  },
  headtext:{

     textAlign:'center',
     marginTop:20,
     color:'#4818CF',
     fontSize:30,
     fontWeight:'bold'
  },
  titletext:
  {
      textAlign:'center',
      marginTop:20,
      fontWeight:'bold',
      color:'black',
      fontSize:22,

  },
  titletext2:
  {
      textAlign:'center',
      marginTop:20,
      fontWeight:'bold',
      color:'black',
      fontSize:17,
      marginHorizontal:15,
  },
  formcontainer:
  {
    flexDirection:'column',
    marginTop:24,
    marginHorizontal:24,

  },
  inputtext:
  {
     marginTop:40,
     fontSize:14,
     color:'black',
    
  },
  input:
  {
      borderWidth:1,
      padding:14,
      borderColor:'#E1E1E1',
      borderRadius:12,
  },
  forget:{

     textAlign:'right',
     marginTop:10,
     color:'red',
  },
  btn:
  {
     backgroundColor:'#4818CF',
     width:'100%',
     height:56,
     justifyContent:'center',
     alignItems:'center',
     marginTop:24,
     borderRadius:12,
  },
  btntext:
  {
     color:'white',
     fontWeight:'bold',
     fontSize:16,
  },

});
export default Login2
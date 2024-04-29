import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Loginform = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header} >Login</Text>
      <View style={styles.inputcontainer}>

        <Text style={styles.titletxt} >Hi , Welcome back here...</Text>
        <Text style={styles.subHeading}>Hello Again, You have been missed</Text>

      </View>
      <View style={styles.formcontainer}>

        <Text style={styles.label}> E-mail </Text>
        <TextInput  placeholder='Enter email id ' style={styles.input}></TextInput>

      </View>

      <View style={styles.formcontainer}>

           <Text style={styles.label}>Password </Text>
           <TextInput  placeholder='Enter Password '  style={styles.input}></TextInput>

      </View>
      <View>
      <TouchableOpacity onPress= {() => {alert('Forgot Clicked')}}>

         <Text style={styles.forget}>Forget Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => {alert("Submit Successfully!")}}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:'white'   
    },
    header:
    {
        textAlign:'center',
        fontSize:30,
        marginTop:20,
        fontWeight:'bold', 
        color:'black',
    },
    inputcontainer:
    {
         marginHorizontal: 24,
         flexDirection:'column',
         marginTop:20,
    },
    titletxt:
    {
        fontSize: 24,
        fontWeight: '600',
         color:'black',
    },
    subHeading:
    {
        fontSize: 14,
        fontWeight: '600',
        color:'black',
    },
    formcontainer:
    {
        marginTop:30,
        marginHorizontal:20,
    },
    input:
    {
        borderWidth: 1,
        padding: 14,
        borderColor: '#E1E1E1',
        borderRadius: 12,  
        color:'black',

    },
    forget:
    {
        marginTop:24,
        textAlign:'right',
        fontSize:16,
        color:'black',
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10
    },
    btn:
    {
        backgroundColor: '#4818CF',
        width: '75%',
        height: 56,
        justifyContent: 'center',
        alignItems:"center",
        marginTop: 44,
        borderRadius: 12,
        marginHorizontal:50,
        
    },
    btnText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF',
      },

});

export default Loginform
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';


const Welcome = (navigation) => {
    return (
        <SafeAreaView style={styles.container}>
            <Feather name='menu' size={20} />
            {/* <Image source={require = ('.Images/profile.jpg')} style={styles.img} /> */}
            <Text style={styles.heading}>Welcome ,</Text>
            <Text style={styles.heading1}>Our Fashoins App</Text>
            <View>
                <TextInput style={styles.search}>Search</TextInput>
                
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        marginHorizontal:30,

    },
    img:
    {
        width: '40%',
        backgroundColor: '#000',

    },
    heading:
    {
        fontSize: 24,
        marginTop: 100,
        color: 'black',
        fontFamily: 'Raleway-bold',
        fontWeight: '900',
    },
    heading1:
    {
        fontSize: 24,
        fontFamily: 'Raleway-bold',
        fontWeight: '900',
    },
    search:
    {
        
        width:'80%',
        elevation:5,
        height:'20%',
        borderRadius:17,
        backgroundColor:'#F5F5F5',
        marginTop:20,
        
    }

})



export default Welcome
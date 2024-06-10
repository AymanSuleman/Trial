import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'



const Demo = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('./Images/profile.jpg')}
                style={styles.profile}
            />
            <View style={styles.header}>
                <View style={styles.headertext}>
                    <Text style={styles.greeting}>Good Morning</Text>
                    <Text style={styles.name}>Mr. Chaudhari!</Text>

                </View>
            </View>
            <View>
                <TextInput style={styles.textinput}> Where To ?</TextInput>
            </View>

            <View style={styles.recentSearches}>
                <Text style={styles.recentSearchesTitle}>Recent Searches</Text>
                <View style={styles.recentSearch}>
                    <Text style={styles.recentSearchText}>The Lakes Inn</Text>

                </View>
            </View>
            <View style={styles.navigationTabs}>
                <TouchableOpacity style={styles.navTab}>
                    <Text style={styles.navTabText}>Hourly Room</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navTab}>
                    <Text style={styles.navTabText}>Travel Roommate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navTab}>
                    <Text style={styles.navTabText}>Event Space</Text>
                </TouchableOpacity>

            </View>
            <Text style={styles.destinationtext}> Popular Destination</Text>

            <ScrollView style={styles.destination} horizontal={true}  showsVerticalScrollIndicator={false} >
                <View style={styles.destinationcard}>
                      <Image source={require('./Images/nandi.jpg')} style={styles.imgs} />
                      <Text style={styles.destinationName}> Nandi Hill, Banglore</Text>
                      <Text style={styles.destinationPrice}>1200/-</Text>
                     
                </View>
                <View style={styles.destinationcard}>
                      <Image source={require('./Images/nandi.jpg')} style={styles.imgs} />
                      <Text style={styles.destinationName}> Nandi Hill, Banglore</Text>
                      <Text style={styles.destinationPrice}>1200/-</Text>
                     
                </View>
                <View style={styles.destinationcard} >
                      <Image source={require('./Images/nandi.jpg')} style={styles.imgs} />
                      <Text style={styles.destinationName}> Nandi Hill, Banglore</Text>
                      <Text style={styles.destinationPrice}>1200/-</Text>
                     
                </View>
            </ScrollView>

        </SafeAreaView >
    )
}
const styles = StyleSheet.create({

    container:
    {
        flex: 1,

    },
    profile:
    {
        marginTop: 30,
        borderRadius: 100,
        width: '19%',
        height: '10%',
        // marginLeft: 355,
        marginLeft: 15,

    },
    header:
    {
        marginTop: -30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        flexDirection: 'column',
        // marginLeft:20,
    },
    greeting:
    {
        marginLeft: 100,
        marginTop: -30,
        fontSize: 18,
        color: '#555',
    },
    name:
    {
        marginLeft: 100,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    textinput:
    {
        fontSize: 24,
        marginHorizontal: 24,
        marginTop: 50,
        borderRadius: 30,
        height: 60,
        width: '80%',
        backgroundColor: '#fff',
        elevation: 5,
    },
    recentSearches:
    {

        marginHorizontal: 24,
        backgroundColor: 'blue',
        marginTop: 20,
        width: '80%',
        height: '15%',
        borderRadius: 10,

    },
    recentSearchesTitle:
    {
        marginHorizontal: 24,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
    },
    recentSearch:
    {
        padding: 15,

    },
    recentSearchText:
    {
        marginHorizontal: 24,
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    },
    navigationTabs: 
    {
        height:'5%',
        width:'120%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    navTab: {
        flex: 1,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        width:'auto',
        alignItems: 'center',
        marginLeft: 10,
        elevation:4,
        borderColor:'#000',
    },
    navTabText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        width:'auto',
        
    },
    destinationcard:
    { 
        flex:1,
        marginTop: 30,
        borderRadius: 10,
        // backgroundColor: '#fff',
        padding: 30,
        elevation:5,
            
    },
    destination:
    {
        marginHorizontal: 20,
        marginTop: 20,
        flex:1,
    },
    destinationtext:
    {
        marginTop:20,
        fontSize: 30,
        color: 'black',
        fontWeight: '800'
    },

    imgs:
    {
        marginTop:-60,
        width: '130%',
        height: 200,
        borderRadius: 10,  
        marginLeft:-22,
    },
    destinationName: {
        color:'black',
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
      },
      destinationPrice: 
      {
        color:'black',
        marginTop: 5,
        fontSize: 18,
      
      },

})
export default Demo
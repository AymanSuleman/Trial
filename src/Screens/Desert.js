import { View, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Desert = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('./Images/desert.jpg')} style={styles.img} imageStyle={styles.imageStyle}>
                <Text style={styles.heading}>Desert Safari</Text>
                <View style={styles.imgcontain}>
                    <Text style={styles.containtext}>
                        Desert Safari
                    </Text>
                    <Text style={styles.text}>
                        02 Day
                        <Text>   28 KM North</Text>
                        <Text>   4.0  </Text>
                    </Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.destext}>Description</Text>
                    <ScrollView>
                        <Text style={styles.text2}>
                            Embark on an unforgettable adventure in the heart of the Abu Dhabi desert. Our Desert Safari offers a unique blend of excitement and tranquility, providing an ideal escape from the bustling city life. Traverse the golden dunes in a 4x4 vehicle, experience the thrill of dune bashing, and take in the stunning panoramic views of the endless desert landscape.

                            As the sun begins to set, witness the desert transform into a mesmerizing palette of colors, perfect for capturing breathtaking photographs. Upon arrival at our traditional Bedouin-style campsite, you'll be welcomed with Arabic coffee and dates. Indulge in a variety of activities such as camel riding, sandboarding, and henna painting.
                            With a high rating from over 1500 reviews, the desert safari promises a memorable experience filled with adventure, culture, and natural beauty. Join us for an extraordinary journey into the desert and create memories that will last a lifetime.

                        </Text>
                    </ScrollView>
                   
               
                <View style={styles.imgcontain}>
                    <Text style={styles.containtext}>
                        Desert Safari
                    </Text>
                    <Text style={styles.text}>
                        02 Day
                        <Text>   28 KM North</Text>
                        <Text>   4.0  </Text>
                    </Text>
                </View>
                </View>
            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,

    },
    img:
    {
        flex: 1,
        width: '100%',
        height: '50%',
    },
    imageStyle:
    {
        borderBottomLeftRadius: 48,
        borderBottomRightRadius: 48,
    },
    title:
    {
        marginHorizontal: 24,
    },
    heading:
    {
        fontSize: 28,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: '600',
        color: 'white',
    },
    imgcontain:
    {
        marginHorizontal: 35,
        marginTop: 300,
        backgroundColor: '#fff',
        width: '85%',
        height: '13%',
        borderRadius: 20,
        elevation: 25,
    },
    containtext:
    {
        marginHorizontal: 20,
        fontSize: 24,
        marginTop: 10,
        color: '#000',
        fontWeight: '600',
    },
    text:
    {
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 18,
    },
    description:
    {
        marginHorizontal: 20,
        marginTop: 60,

    },
    destext:
    {
        fontSize: 32,
        fontWeight: '900',
        color: 'black',
        fontFamily: 'serif',
    },
    text2:
    {
        color: 'black',
        marginTop: 10,
    },
    footer:
    {
        backgroundColor: 'orange',
        height: '40%',
    },


})
export default Desert
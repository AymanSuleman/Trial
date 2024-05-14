import { View, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'


const Dream = () => {

    const Data = [

        {
            id: 1,
            title: 'Desert Safari Abu Dhabi',
            image: source = require('./Images/desert.jpg'),
            // imageUrl:'./Images/desert.jpg',
        },

        {
            id: 2,
            title: 'Nandi Hills ,Banglore.',
            image: require('./Images/nandi.jpg'),
        },

        {
            id: 3,
            title: 'lonavala,Mumbai',
            image: require('./Images/lonavala.jpg'),
        },

        {
            id: 4,
            title: 'Manali',
            image: require('./Images/manali.jpeg'),
        },

        {
            id: 5,
            title: 'Bali',
            image: require('./Images/bali.jpg'),
        },


    ];


    const Item = ({ title }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        )
    };


    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('./Images/profile.jpg')}
                style={styles.profile}
            />
            <View>
                <Text style={styles.header}>Eascape the ordinary.</Text>
                <Text style={styles.headertext}>Dream Gateway.</Text>

                <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                    data={Data}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id} />

                <Text style={styles.text2}>Favorite Spots</Text>
                <View style={styles.block}>
                    <Image source={require('./Images/lonavala.jpg')} style={styles.imgs} />
                    <Text style={styles.imgtext}> The lonavala. </Text>
                    <Image source={require('./Images/bali.jpg')} style={styles.imgs} />
                    {/* <Image source={require('./Images/lonavala.jpg')} style={styles.imgs} /> */}

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: 'white',
    },
    profile:
    {
        marginTop: 20,
        borderRadius: 100,
        width: '10%',
        height: '5%',
        marginLeft: 330,
    },
    headertext:
    {
        marginHorizontal: 24,
        color: '#000',
        fontSize: 33,
        fontWeight: '800',
    },
    header:
    {
        color: 'black',
        marginHorizontal: 24,
    },
    item:
    {
        marginTop: 30,
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 18,
        borderRadius: 30,
        height: 350,
        width: 230,
        elevation: 7,
    },
    title:
    {
        marginHorizontal: 10,
        marginTop: 250,
        color: 'black',
        fontWeight: '600',
        fontSize: 22,
    },

    text2:
    {
        marginHorizontal: 20,
        color: 'black',
        fontSize: 32,
        marginBottom: -10,
        fontWeight: '800',

    },
    imgs:
    {
        borderRadius: 10,
        width: '20%',
        height: '15%',
        marginHorizontal: 20,
        marginTop:60,

    },
    
    imgtext:
    {
        flexDirection: 'row',
        color:'black',
        fontWeight:'600',
        marginLeft:150,
        
    },
})
export default Dream
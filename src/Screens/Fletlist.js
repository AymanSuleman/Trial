import { View, Text, SafeAreaView, StyleSheet, FlatList,StatusBar } from 'react-native'
import React from 'react'

const Fletlist = () => {

    const Data = [

        {
            id: 1,
            title: 'shoes',
            image:require('./Images/shoes.jpg'),
        },
        {
            id: 2,
            title: 'shirt',
            image:require('./Images/shirt.jpg'),

        },
        {
            id: 3,
            title: 'hoodie',
            image:require('./Images/hoodie.png'),

        },
        {
            id: 4,
            title: 'T-shirt',
            image:require('./Images/tshirt.jpg'),

        },
        {
            id: 5,
            title: 'T-shirt',
            // image:require(''),

        },
        {
            id: 6,
            title: 'T-shirt',
            // image:require(''),

        },
        {
            id: 7,
            title: 'T-shirt',
            // image:require('./7566.jpg'),

        },
        {
            id: 8,
            title: 'T-shirt',
            // image:require(''),

        },
        {
            id: 9,
            title: 'T-shirt',
            // image:require(''),

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
        <SafeAreaView style={styles.container} >
            <FlatList  showsHorizontalScrollIndicator={false}
                data={Data}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems:'center',
    },

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 18,
        borderRadius: 30,
        height: 290,
        width: 315,
    },

    title: {
        fontSize: 32,
        marginTop: 200,
        color: 'black',
    },
    img:
    {
       
        borderRadius: 30,
        height: 290,
        width: 315,
        marginTop: -20,
    },
})

export default Fletlist
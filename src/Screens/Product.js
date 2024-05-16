import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const Product = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image source={require('./Images/hoodie.jpg')} style={styles.img} />
                <Text style={styles.title}>Modern light clothes</Text>
                <Text style={styles.rating}>5.0 (932 reviews)</Text>
                <Text style={styles.description}>
                    Its simple and elegant shape makes it perfect for those of you who like you who want minimalist clothes.
                </Text>
                <View>
                    <Text style={styles.optionTitle}>Choose Size</Text>
                </View>

            </ScrollView>
            <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to Cart | $100.99</Text>
      </TouchableOpacity>
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
        marginHorizontal: 20,
        marginTop: 30,
        flex: 1,
        width: '90%',
        height: 500,
        borderRadius: 80,
    },
    title:
    {
        marginHorizontal: 20,
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 8,
        color: 'black',
    },
    rating:
    {
        marginHorizontal: 20,
        fontSize: 18,
        color: 'grey',
        marginBottom: 8,
        color: 'black',
    },
    description:
    {
        marginHorizontal: 20,
        fontSize: 20,
        marginBottom: 16,
        color: 'black',
    },

    optionTitle:
    {
        marginHorizontal:20,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color:'#000',
    },
    addToCartButton: {
        backgroundColor: 'black',
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal:20,
        marginBottom:10,
    },
    addToCartButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

    }
})
export default Product
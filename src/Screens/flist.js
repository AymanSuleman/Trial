import { View, Text, SafeAreaView,StyleSheet, Flatlist} from 'react-native'
import React from 'react'

const Data =[

    {
        id:1,
        title:'T-shirt',
    },
    {
        id:2,
        title:'T-shirt',
    },
    {
        id:3,
        title:'T-shirt',
    },
    {
        id:4,
        title:'T-shirt',
    },
    {
        id:5,
        title:'T-shirt',
    },
    {
        id:6,
        title:'T-shirt',
    },
    {
        id:7,
        title:'T-shirt',
    },
    {
        id:8,
        title:'T-shirt',
    },
    {
        id:9,
        title:'T-shirt',
    },
];

const Item =({title}) => {

    return(
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View> 
)};

const flist = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Flatlist
            data={Data} 
            renderitem={({item}) => <Item title={item.title}/>} 
            keyExtractor= {item =>item.id} />
    </SafeAreaView>
  )
}
 const styles = StyleSheet.create({
    container:{
        flex:1,
        // marginTop: StatusBar.currentHeight || 0,
    },

    item:{
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
     },

    title: {
    fontSize: 32,
  },
 })
export default flist
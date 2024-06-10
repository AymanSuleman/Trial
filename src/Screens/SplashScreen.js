import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation(); 

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Select');
        }, 2500);
    
        return () => clearTimeout(timer);
    }, [navigation]);

  return (
    <SafeAreaView >
      <Text>Polishpad</Text>
    </SafeAreaView>
  )
}

export default SplashScreen

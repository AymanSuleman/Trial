import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../Screens/Welcome';
import viewscreen from '../Screens/viewscreen';
import Login2 from '../Screens/Login2';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login2"
          component={Login2}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="view"
          component={viewscreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigation;

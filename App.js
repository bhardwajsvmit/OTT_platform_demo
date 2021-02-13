import 'react-native-gesture-handler';
import React from 'react';
import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native'
import TabNavigation from './TabNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import CardInfo from './components/CardInfo'

const {width,height}= Dimensions.get('window');


const Stack = createStackNavigator();


export default function App() {
 
  return (
    <NavigationContainer>
      <StatusBar hidden={true}  />
      <Stack.Navigator initialRouteName="Cards" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Cards" component={TabNavigation}  />
        <Stack.Screen name="CardInfo" component={CardInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


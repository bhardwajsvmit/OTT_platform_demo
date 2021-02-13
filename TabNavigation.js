import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Cards from './screens/Cards';
import MemberPage from './screens/MemberPage';
import Shop from './screens/Shop';
import Ranking from './screens/Ranking';

const {width,height}= Dimensions.get('window');

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator   
      shifting={true}
      labeled={false}
      activeColor="#3a3d6b"
      inactiveColor="white"
        initialRouteName=""
      barStyle={{
        position: 'absolute',
        backgroundColor: 'transparent',
        height: 64,
        width:width*0.96,
        borderTopColor: 'transparent',
       justifyContent:'center',
       alignItems:'stretch',

        bottom: 0,
        margin: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0.3
        },
        shadowRadius: 5,
        shadowOpacity: 0.1
    
    }}
       >

      <Tab.Screen name="Cards" component={Cards} options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-open-outline" color={color} size={22} />
          ) 
          }}/>
      <Tab.Screen name="MemberPage" component={MemberPage} options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="qrcode-scan" color={color} size={22} />
          ) 
          }} />

<Tab.Screen name="Ranking" component={Ranking} options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="medal-outline" color={color} size={22} />
          ) 
          }} />


<Tab.Screen name="Shop" component={Shop} options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-minus" color={color} size={22} />
          ) 
          }} />

    </Tab.Navigator>
    )
}

import React from 'react'
import { View, Text, Image } from 'react-native'
import Header from '../components/Header'


export default function MemberPage() {
    return (
        <View style={{flex:1,backgroundColor:'#4184b0',justifyContent:'flex-start',alignItems:'center',flexDirection:'column'}} >
            <Header/>

            <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
            <View style={{padding:5,backgroundColor:'#76cce3',borderRadius:5,marginBottom:120}} >
           <Image style={{height:230,width:230,}} source={require('../assets/QR_CODE.png')} />
            </View>
            </View>

        </View>
    )
}

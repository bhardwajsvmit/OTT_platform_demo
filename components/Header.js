import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Avatar} from 'react-native-paper';
import faker from 'faker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header(props) {
    return (
        <View style={{backgroundColor:'#76cce3',width:'100%',borderBottomColor:'white',borderBottomRightRadius:5,borderBottomLeftRadius:5,}} >
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:33,paddingBottom:7}} >
            
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingHorizontal:10}} >
            <View style={{padding:5}} ><Avatar.Image size={54} source={{uri:faker.image.image()}} /></View>
            <Text style={{color:'#394f5e',fontSize:16,padding:5,fontWeight:'600',textTransform:'uppercase'}} >sumit</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingHorizontal:10}} >

                <View style={{flexDirection:'column',padding:5}} >
                <Text style={{fontSize:14,color:'#394f5e'}} >points</Text>
                <Text style={{fontSize:20,color:'#394f5e',}} >40</Text>
                </View>

                <View style={{padding:5 }} ><MaterialCommunityIcons name="alpha-p-circle-outline" color='#e1edf5' size={45} /></View>

            </View>



            </View>
        </View>
    )
}

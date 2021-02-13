import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { Avatar,Surface} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width,height}= Dimensions.get('window');



export default function RankCard({data}) {

   

    return (
        
         <Surface style={styles.surface}>

            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}} >

             <Text style={{color:'white',fontSize:17,paddingHorizontal:18,fontWeight:'bold'}} >{data.rank}</Text>
             
             <View style={{padding:10}} >
         <Avatar.Image size={54} source={{uri:data.img}} />
             </View>
         
         
         <View style={{flexDirection:'column'}} >
         <Text style={{color:'white',fontSize:17,padding:10,fontWeight:'500'}} >{data.fname}</Text>
         <Text style={{color:'white',fontSize:13,paddingHorizontal:10,paddingBottom:8,fontWeight:'500'}} >⭐️ {data.points}</Text>
         </View>

         </View>

        <View style={{flex:1,flexDirection:'row-reverse',alignItems:'center',paddingHorizontal:20}} >
        <MaterialCommunityIcons name="alpha-p-circle-outline" color='#e1edf5' size={32} />
        </View>

  </Surface>
        
    )
}

const styles = StyleSheet.create({
    surface: {
      padding: 10,
      height: 80,
      width:width*0.98,
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 10,
      flexDirection:'row',
      backgroundColor:'#4795c9',
      marginTop:4,
      marginHorizontal:2,
      borderBottomColor:'grey',
      borderBottomWidth:0.49,
      borderRadius:10,
      

    },
  });
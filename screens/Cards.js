import React, {useState, useEffect} from 'react'
import { View, Text, Dimensions, SafeAreaView, StyleSheet, FlatList, Image, Animated, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import {getMovies} from './api'


const {width,height}= Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = width*0.73;
SPACER_ITEM_SIZE = (width-ITEM_SIZE)/2;


export default function Cards({navigation}) {

const[movies,setMovies]=useState([]);
const scrollX = React.useRef(new Animated.Value(0)).current;


    useEffect(() => {

        const fetchData = async()=>{
        const movies = await getMovies();
            setMovies([{key:'left_spacer'},...movies,{key:'right_spacer'}])
        }

        if (movies.length===0) {
        fetchData();
        }
        

    }, [movies]);





 if(movies.length===0){
        return(
            <SafeAreaView style={styles.container} >
                <Text>LOADING</Text>
            </SafeAreaView>
        )
}else {
    return (
        
        <View style={styles.container} >
            <Header width={width} />

                
            <Animated.FlatList
            showsHorizontalScrollIndicator={false}
            data={movies}
            keyExtractor={(item)=>item.key}
            horizontal
            onScroll={Animated.event(
                [{ nativeEvent: {contentOffset: { x: scrollX}}}],
                {useNativeDriver:true }
            )}
            snapToInterval={ITEM_SIZE}
            decelerationRate={0}
            bounces={false}
            contentContainerStyle={{alignItems:'center'}}
            scrollEventThrottle={16}
            renderItem={({item,index})=>{

                if(!item.poster){
                    return <View style={{width:SPACER_ITEM_SIZE}} />
                }
                const inputRange=[
                    (index-2)*ITEM_SIZE,
                    (index-1)*ITEM_SIZE,
                    index*ITEM_SIZE
                ];
                const translateY=scrollX.interpolate({
                    inputRange,
                    outputRange:[0,-50,0]
                })
                return(
                    <View style={{width:ITEM_SIZE}} >
                        <TouchableOpacity onPress={()=>navigation.navigate('CardInfo',{item})} >
                        <Animated.View style={{
                            marginHorizontal:SPACING,
                            paddingBottom:SPACING*2,
                            alignItems:'center',
                            backgroundColor:'#76cce3',
                            borderRadius:25,
                            transform:[{translateY}],
                        }} >

                        
                            <Image source={{uri:item.poster}} style={styles.posterImage} />
                    
                        <View style={{paddingHorizontal:13,paddingVertical:3}} >

                            <Text style={{fontSize:24,color:'white',fontWeight:'700'}} numberOfLines={1} >{item.title}
                            </Text>
                            
                            <Text numberOfLines={1} style={{fontSize:15,color:'white',fontWeight:'500'}} >
                                {item.description}
                            </Text>
                            </View>

                        </Animated.View>
                        </TouchableOpacity>
                    </View>
                )
            }
         } 
         />

        </View>
    )
 
 }//else


}//main


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4184b0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
      posterImage: {
        width: '100%',
        height: ITEM_SIZE * 1.2,
        resizeMode: 'cover',
        
        borderTopLeftRadius: 20,
        borderTopRightRadius:20,
        margin: 0,
        marginBottom: 10,
      },
  });
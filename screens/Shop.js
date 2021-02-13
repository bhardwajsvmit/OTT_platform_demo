import React, {useState ,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Masonry from 'react-native-masonry';
import FastImage from 'react-native-fast-image';
import {getMovies} from './api'
import Header from '../components/Header';


export default function Shop() {



    return (
        <View style={{justifyContent:'flex-start',alignItems:'center',backgroundColor:'#4184b0',flex:1}} >
            <Header/>
            <Text>shop</Text>

        </View>
    )
}

const styles = StyleSheet.create({

})

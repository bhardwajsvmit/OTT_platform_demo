import * as React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
// import { LinearGradient } from 'expo-linear-gradient';
import { Video, AVPlaybackStatus } from 'expo-av';


const {width,height}= Dimensions.get('window');

const BACKDROP_HEIGHT = height * 0.63

export default function Card({ route, navigation }) {
const {item} = route.params;
const video = React.useRef(null);
const [status, setStatus] = React.useState({});

    return (
        <View style={{backgroundColor:'black',flex:1}} >
            <View style={{width,height:BACKDROP_HEIGHT}} >
            <Image style={{position:'absolute',width,height:BACKDROP_HEIGHT,resizeMode:'cover'}} source={{uri:item.backdrop}} />
           
            <LinearGradient colors={['transparent','#4184b0']} style={{width,height:BACKDROP_HEIGHT,position:'absolute',bottom:0}} />
            
            
            <View style={{flexDirection:'column-reverse',flex:1}} >
            <Text style={{color:'white',paddingHorizontal:40,paddingBottom:20}} >{item.description}</Text>
                <View>
                    <Text style={{fontSize:35,color:'white',paddingHorizontal:40,paddingBottom:10,fontWeight:'bold'}} >{item.title}</Text>
                </View>
            </View>
            </View>

            
            
            
            
            <View style={styles.container}>

      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="stretch"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    
      

    </View>

           

            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4184b0',
      alignItems: 'center',
      justifyContent: 'center',
      

    },
    video: {
        alignSelf: 'center',
        width:width*0.8,
        height:height*0.22,
        borderRadius:15,
        resizeMode:'contain',
        
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
  
});
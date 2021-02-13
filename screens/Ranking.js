import React, {useState,useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import faker from 'faker';
import { Switch } from 'react-native-paper';
import RankCard from '../components/RankCard';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';


export default function Ranking() {

    const[ranks,setRanks]=useState([])
    const [isSwitchOn, setIsSwitchOn] = useState(true);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


    const ranking = [
        {rank:1 ,fname:faker.name.findName(),points:1500,img:faker.image.image()},
        {rank:2 ,fname:faker.name.findName(),points:1200,img:faker.image.image()},
        {rank:3 ,fname:faker.name.findName(),points:1100,img:faker.image.image()}
    ]


useEffect(() => {
    setRanks(ranking)
   
}, [])

    return (
        <View style={{justifyContent:'flex-start',alignItems:'center',backgroundColor:'#4184b0',flex:1}} >
            <Header />

            <View style={{flexDirection:'row', justifyContent:'space-around',alignItems:'center',width:'100%',paddingBottom:15,paddingTop:15,backgroundColor:'#2e75a3',borderBottomRightRadius:5,borderBottomLeftRadius:5}} >
                <Text style={{color:'white',fontSize:30,textTransform:'uppercase'}} >ranking</Text>
                <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
                <Text style={{color:'white',fontSize:15,textTransform:'capitalize',padding:10}} >monthly</Text>
                <Switch value={isSwitchOn} color='grey' onValueChange={onToggleSwitch} />
                <Text style={{color:'white',fontSize:15,textTransform:'capitalize',padding:10}} >yearly</Text>
                </View>
            </View>

            <View>
            <ScrollView>
                {ranks.map((item)=><RankCard data={item} key={item.rank} />)}
            </ScrollView>
            </View>

        </View>
    )
}



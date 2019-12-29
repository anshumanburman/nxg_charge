import React, { useState, useEffect } from 'react';
import { View,StyleSheet,FlatList,ImageBackground } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import CommonHeader from '../commons/CommonHeader';
import {ChargingStationView,ChargingStationDetailView,ChargingStationDetailListView} from '../commons/CommonViews';
import * as Utils from '../../styles';

const list = [
    {title: "Vikhroli East",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
    {title: "Phoenix Marketcity",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
    {title: "Vikhroli East",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
    {title: "Phoenix Marketcity",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
    {title: "Vikhroli East",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
    {title: "Phoenix Marketcity",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
]

const ChargingStationDetails = ({navigation})=> {
const [chargingList, setChargingList] = useState(list);
useEffect(()=>{
    console.warn("navigation details :::: ",navigation.state);
    
})


    const renderDrawerItems = (item, index)=> {
    return <ChargingStationDetailListView />
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <ImageBackground style={{height:300}} source={require('../../../assets/images/super_charge.png')}>
         <CommonHeader headerTitle={'Vikhroli East'} onPress={()=>navigation.goBack()} tintColor={'white'}/>
         
         </ImageBackground>
         <View style={{marginTop:-80}}>
         <ChargingStationDetailView />
         </View>
         <FlatList
                    data={chargingList}
                    renderItem={({ item, index }) => renderDrawerItems(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={setChargingList}
                    style={{marginVertical:10,backgroundColor:'rgba(0,0,0,0.01)'}}
                />
         </View>
        </SafeAreaView>
    )
}
 const styles = StyleSheet.create({
     container  : {
         flex: 1,
         backgroundColor:'white'
     }
 })


export default ChargingStationDetails;



//export default ChargingStationDetails;
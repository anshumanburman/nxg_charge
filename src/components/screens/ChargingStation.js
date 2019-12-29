import React, { useState, useEffect } from 'react';
import { View,StyleSheet,FlatList } from 'react-native';
import {SafeAreaView,NavigationActions} from 'react-navigation';
import CommonHeader from '../commons/CommonHeader';
import {ChargingStationView} from '../commons/CommonViews';
import * as Utils from '../../styles';

const list = [
    {title: "Vikhroli East",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
    {title: "Phoenix Marketcity",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
    {title: "Vikhroli East",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
    {title: "Phoenix Marketcity",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
    {title: "Vikhroli East",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
    {title: "Phoenix Marketcity",address : "Pirojsha nagar, vikhroli East, Mumbai",distance: "20Km"},
]

const ChargingStation = ({navigation})=> {
const [chargingList, setChargingList] = useState(list);
useEffect(()=>{
    console.warn("navigation :::: ",navigation.state);
    
})

    const renderDrawerItems = (item, index)=> {
    return <ChargingStationView onPress={()=>navigation.dispatch(NavigationActions.navigate({routeName:Utils.Constants.KEY_CHARGING_STATION_DETAILS,action: NavigationActions.navigate({ routeName: Utils.Constants.KEY_CHARGING_STATION_DETAILS })}))}/>
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
         <CommonHeader headerTitle={'Charging Stations'} onPress={()=>navigation.dispatch(NavigationActions.back())}/>
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


export default ChargingStation;
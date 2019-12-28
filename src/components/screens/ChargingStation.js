import React, { useState } from 'react';
import { View,StyleSheet,FlatList } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import CommonHeader from '../commons/CommonHeader';
import {ChargingStationView} from '../commons/CommonViews';

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

    const renderDrawerItems = (item, index)=> {
    return <ChargingStationView />
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
         <CommonHeader headerTitle={'Charging Stations'} onPress={()=>navigation.goBack()}/>
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
import React, {useState} from 'react';

import { View,StyleSheet,FlatList,  TouchableOpacity, Text } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import CommonHeader from '../commons/CommonHeader';
import * as Utils from '../../styles';
import * as Style from '../../styles';





const list = [
    {title: "Flat 50% off on your first Charging",address : "Use code CHARG50 lorem Ipsum is simply dummy text.", color:'#ffffff', textColor:'#2a2d2a', hcolor:'#9f9f9f'},
    {title:  "Flat 50% off on your first Charging",address :"Use code CHARG50 lorem Ipsum is simply dummy text.", color:'#fc684f', textColor:'#ffffff', hcolor: '#ffffff'},
    {title:  "Flat 50% off on your first Charging",address : "Use code CHARG50 lorem Ipsum is simply dummy text.", color:'#ffffff', textColor:'#2a2d2a', hcolor:'#9f9f9f'},
    {title:  "Flat 50% off on your first Charging",address : "Use code CHARG50 lorem Ipsum is simply dummy text.", color:'#4a8df6', textColor:'#ffffff', hcolor:'#ffffff'},
   
]

const Offers = ({navigation}) => {
  
    const [isOffer, setIsOffer] = useState(true);

    const [chargingList, setChargingList] = useState(list);

    const isSelectedOffer = (bool) => {
        setIsOffer(bool)
    }


    const renderDrawerItems = (item, index)=> {
        return (
            <View style={{marginLeft:15, marginRight:15, marginBottom:20, backgroundColor:item.color, borderRadius:5, height:102, ...Utils.Mixins.boxShadow('black') }}>
                <View style={{marginTop:12, marginLeft:13, marginRight:34}}>
                    <Text style={{fontSize:16, fontWeight:'bold', color:item.textColor}}>
                        {item.title}
                    </Text>
                    <Text style={{marginTop:7, fontSize:14, color:item.hcolor, marginLeft:4}}>
                        {item.address}
                    </Text>
                </View>

                
            </View>
        )
      
        }

        // const extractKey = ({ id }) => id

    return  (

        <SafeAreaView style={{flex:1}}>
        <View style={{...styles.container,backgroundColor:'rgba(0,0,0,0.01)'}}>
     <CommonHeader headerTitle={'Offers'} onPress={()=>navigation.goBack()}/>

     {/* <View style={{marginTop:25, flexDirection:'row',  justifyContent:'center'}}>  

     <Text style={{fontSize:18, fontWeight:'bold'}}>Current Offers</Text>
     <Text style= {{marginLeft:35}}>Upcoming Offers</Text>

    
      </View> */}


<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Style.Spacing.SCALE_25 }}>
                    <TouchableOpacity style={styles.offer} onPress={() => isSelectedOffer(true)}>
                        <Text style={isOffer ? styles.selected : styles.unselected}>Current Offers</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.offer} onPress={() => isSelectedOffer(false)}>
                        <Text style={!isOffer ? styles.selected : styles.unselected}>Upcoming Offers</Text>
                    </TouchableOpacity>
                </View>


     


    <View style = {{ marginTop:11,backgroundColor:'rgba(0,0,0,0.01)'}}>



     <FlatList
                data={list}
               renderItem={({ item, index }) => renderDrawerItems(item, index)}
                keyExtractor={(item, index) => index.toString()}
                extraData={setChargingList}
                style={{backgroundColor:'rgba(0,0,0,0.01)',marginTop:10}}
            />
     </View>




     </View>
    </SafeAreaView>


    )



}

const styles = StyleSheet.create({
    container  : {
        flex: 1,
        backgroundColor:'white'
    },

    offer: {
        marginLeft: Style.Spacing.SCALE_30,

    },
    offer: {
        marginLeft: Style.Spacing.SCALE_45,

    },
    selected: {
        color: Style.Colors.SIGN_COLOR,
        fontSize: Style.Typography.FONT_SIZE_18,
        fontFamily: Style.Typography.FONT_FAMILY_EXTRA_BOLD,
        fontWeight: Style.Typography.FONT_WEIGHT_EXTRA_BOLD,

    },
    unselected: {
        color: Style.Colors.GREY_COLOR,
        fontSize: Style.Typography.FONT_SIZE_14,
        fontFamily: Style.Typography.FONT_FAMILY_REGULAR,
        fontWeight: Style.Typography.FONT_WEIGHT_REGULAR,

    },
  
})


export default Offers;





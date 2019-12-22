import React, {useState} from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, FlatList } from 'react-native';
import * as Utils from '../../styles';
import {NavigationActions} from 'react-navigation';

const itemList = [
    {label : "Find Station"},
    {label : "Charge Now"},
    {label : "Login", route: Utils.Constants.KEY_LOGIN},
    {label : "Sign up", route: Utils.Constants.KEY_LOGIN},
    {label : "Contact Us"},
    {label : "Privacy policy"}
]

const CustomDrawer = ({navigation}) => {

const [sideBarItem,setSideBarItem]=useState(itemList);
const navigatetoScreen = (route) => {
    console.warn('pressed cell',route);
    //navigation.closeDrawer();
    if (route === Utils.Constants.KEY_LOGIN) {
        const backAction = NavigationActions.back({
            key: route,
            params:{}
          });
          navigation.dispatch(backAction);
    } else {
        const navigateAction = NavigationActions.navigate({
            routeName : route,
            params
        });
        navigation.dispatch(navigateAction)
    }
    
    //console.warn(' navigateAction',navigateAction);
    
    
    
}
const renderDrawerItems = (item, index)=> {
    return(
        <TouchableOpacity style={styles.itemStyle} onPress={()=>navigatetoScreen(item.route)}>
<Text style={[Utils.Typography.FONT_REGULAR,styles.lblStyle]}>{item.label}</Text>
        </TouchableOpacity>
    )
}
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.hederV}>
                <TouchableOpacity style={styles.crossBtn}>
                    <Image style={[styles.crossBtn, { resizeMode: 'center' }]} source={require('../../../assets/images/close_black.png')} />
                </TouchableOpacity>
                <View style={{ marginTop: 35 }}>
                    <Image style={styles.avatarV} source={require('../../../assets/images/avatar.png')} />
                    <Text style={[styles.nameStyle, Utils.Typography.FONT_EXTRA_BOLD]}>Margaret Ross</Text>
                </View>
            </View>
            <FlatList
                    data={sideBarItem}
                    renderItem={({ item, index }) => renderDrawerItems(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={setSideBarItem}
                    style={{marginVertical:10}}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    hederV: {
        flexDirection: 'row'
    },
    crossBtn: {

        // justifyContent:'center',
        // alignItems:'center',
        //backgroundColor:'red',
        marginTop: 15,
        marginLeft: 5,
        // flexWrap:'wrap',
        width: 30,
        height: 30

    },
    imgCross: {

    },
    avatarV: {
        height: 100,
        width: 100,
        //backgroundColor:'yellow',
        //alignSelf:'flex-end',

        marginHorizontal: "30%"


    },
    nameStyle: {
        textAlign: 'center',
        fontSize: Utils.Typography.FONT_SIZE_18,
        padding: 5

    },
    itemStyle : {
        marginBottom:15,
        padding:10,
        //backgroundColor:'yellow'
    },
    lblStyle : {
        fontSize:Utils.Typography.FONT_SIZE_16,
        color:Utils.Colors.GREY_COLOR
    }
})
export default CustomDrawer;
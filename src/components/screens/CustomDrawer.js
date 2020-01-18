import React, {useState} from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, FlatList } from 'react-native';
import * as Utils from '../../styles';
import {NavigationActions} from 'react-navigation';

const itemList = [
    {label : "Find Station", route: Utils.Constants.KEY_CHARGING_STATIONS},
    {label : "Charge Now", route: Utils.Constants.KEY_OFFERS},
    {label : "Login", route: Utils.Constants.KEY_LOGIN},
    {label : "Sign up", route: Utils.Constants.KEY_LOGIN},
    {label : "Change Password", route: Utils.Constants.KEY_CHANGE_PASSWORD},
    {label : "Help", route: Utils.Constants.KEY_HELP},
    {label : "Contact Us",route: Utils.Constants.KEY_SETTINGS},
    {label : "Privacy policy",route: Utils.Constants.KEY_SETTINGS},
    {label : "Logout"},
]

const CustomDrawer = ({navigation}) => {

const [sideBarItem,setSideBarItem]=useState(itemList);
const navigatetoScreen = (route,index) => {
    console.warn('pressed cell', route);
    navigation.closeDrawer();
    // const navigateAction = NavigationActions.navigate({
    //     routeName: route,
    //     params: {isSignin:false},
    //     action: NavigationActions.navigate({ routeName: route }),
    //   });
    // navigation.dispatch(navigateAction)
let navigateAction=undefined;
    switch (index) {
        case 2:
             navigateAction = NavigationActions.navigate({
                routeName: route,
                params: {isSignin:true},
                action: NavigationActions.navigate({ routeName: route }),
              });
            //navigation.dispatch(navigateAction)
            break;
            case 3:
                 navigateAction = NavigationActions.navigate({
                    routeName: route,
                    params: {isSignin:false},
                    action: NavigationActions.navigate({ routeName: route }),
                  });
               // navigation.dispatch(navigateAction)
                break;
                case 6:
                 navigateAction = NavigationActions.navigate({
                    routeName: route,
                    params: {title:"Contact Us"},
                    action: NavigationActions.navigate({ routeName: route }),
                  });
                  break;
                case 7:
                 navigateAction = NavigationActions.navigate({
                    routeName: route,
                    params: {title:"Privacy Policy"},
                    action: NavigationActions.navigate({ routeName: route }),
                  });
               
                break;
                case 8:
                 navigateAction = NavigationActions.navigate({
                    routeName: route,
                    params: {title:"Privacy Policy"},
                    action: NavigationActions.navigate({ routeName: route }),
                  });
                  alert("You want to log out")
               
                break;
        default:
             navigateAction = NavigationActions.navigate({
                routeName: route,
                //params: {isSignin:false},
                action: NavigationActions.navigate({ routeName: route }),
              });
           // navigation.dispatch(navigateAction)
            break;
    }
    navigation.dispatch(navigateAction)
}
const renderDrawerItems = (item, index)=> {
    return(
        <TouchableOpacity style={styles.itemStyle} onPress={()=>navigatetoScreen(item.route,index)}>
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
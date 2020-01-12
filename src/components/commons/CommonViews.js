import React from 'react';
import {TouchableOpacity, View,Text,Image} from 'react-native';
import * as Utils from '../../styles';




export const ChargingStationView = (props) => {
    const {onPress} = props;
    return (
        <TouchableOpacity style={{ margin: 15, ...Utils.Mixins.boxShadow('color'), backgroundColor: 'white' }} onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ height: '50%', backgroundColor: Utils.Colors.GREEN_COLOR, width: 3 }} />
                <View style={{ padding: 10, flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ ...Utils.Typography.FONT_BOLD, fontSize: 18 }}>Phoenix Marketcity</Text>
                        <View style={{ backgroundColor: Utils.Colors.LIGHT_GREY_COLOR, justifyContent: 'center', alignItems: 'center', height: 25, borderRadius: 12 }}>
                            <Text style={{ ...Utils.Typography.FONT_REGULAR, fontSize: 12, marginLeft: 10, marginRight: 10 }}>20Km</Text>
                        </View>
                    </View>
                    <Text style={{ ...Utils.Typography.FONT_REGULAR, fontSize: 14, color: Utils.Colors.GREY_COLOR, marginTop: 10 }}>Pirojsha nagar, Vikhroli East, Mumbai</Text>
                    <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../../assets/images/verified.png')} style={{ resizeMode: 'center', backgroundColor: 'green', height: 24, width: 24, borderRadius: 12 }} />
                            <Text style={{ ...Utils.Typography.FONT_BOLD, fontSize: 16, color: Utils.Colors.GREEN_COLOR, marginLeft: 5 }}>Available</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ backgroundColor: Utils.Colors.RED_COLOR, justifyContent: 'center', alignItems: 'center', height: 25, borderRadius: 12 }}>
                                <Text style={{ ...Utils.Typography.FONT_REGULAR, fontSize: 12, marginLeft: 10, marginRight: 10, color: 'white' }}>Fast</Text>
                            </View>
                            <View style={{ backgroundColor: Utils.Colors.LIGHT_YELLOW_COLOR, justifyContent: 'center', alignItems: 'center', height: 25, borderRadius: 12, marginLeft: 5 }}>
                                <Text style={{ ...Utils.Typography.FONT_REGULAR, fontSize: 12, marginLeft: 10, marginRight: 10, color: 'white' }}>Moderate</Text>
                            </View>
                            <View style={{ backgroundColor: Utils.Colors.GREEN_COLOR, justifyContent: 'center', alignItems: 'center', height: 25, borderRadius: 12, marginLeft: 5 }}>
                                <Text style={{ ...Utils.Typography.FONT_REGULAR, fontSize: 12, marginLeft: 10, marginRight: 10, color: 'white' }}>Slow</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export const ChargingStationDetailView = (props) => {
    const {onPress,style} = props;
    return (
        <TouchableOpacity style={{ margin: 15, ...Utils.Mixins.boxShadow('color'), backgroundColor: 'white',...style }} onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ height: '70%', backgroundColor: Utils.Colors.GREEN_COLOR, width: 3 }} />
                <View style={{ padding: 15, flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ ...Utils.Typography.FONT_BOLD, fontSize: 18 }}>Vikhroli East</Text>
                        <View style={{ backgroundColor: Utils.Colors.LIGHT_GREY_COLOR, justifyContent: 'center', alignItems: 'center', height: 25, borderRadius: 12 }}>
                            <Text style={{ ...Utils.Typography.FONT_REGULAR, fontSize: 12, marginLeft: 10, marginRight: 10 }}>20Km</Text>
                        </View>
                    </View>
                    <Text style={{ ...Utils.Typography.FONT_FAMILY_REGULAR, fontSize: 14, color: Utils.Colors.GREY_COLOR, marginTop: 5 }}>Pirojsha nagar, Vikhroli East, Mumbai</Text>
                    <Text style={{ ...Utils.Typography.FONT_BOLD, fontSize: 14, marginTop: 10 }}>10$/Unit</Text>
                    
                </View>
            </View>
        </TouchableOpacity>
    )
}
export const ChargingStationDetailListView = (props) => {
    const {onPress,style} = props;
    return (
        <TouchableOpacity style={{ margin: 15, ...Utils.Mixins.boxShadow('color'), backgroundColor: 'white',...style }} onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ height: '70%', backgroundColor: Utils.Colors.GREEN_COLOR, width: 3 }} />
                <View style={{justifyContent:'center',alignItems:'center',padding:10,backgroundColor:Utils.Colors.LIGHT_GREY_COLOR,marginLeft:10,width:50,height:50}}>
                    <Text style={{...Utils.Typography.FONT_BOLD,fontSize:28,lineHeight:32}}>A</Text>
                </View>
                <View style={{ padding: 15, flex: 1 }}>
                <Text style={{ ...Utils.Typography.FONT_BOLD, fontSize: 18 }}>DC-Moderate</Text>
                    
                    <Text style={{ ...Utils.Typography.FONT_REGULAR, fontSize: 16, color: Utils.Colors.GREY_COLOR, marginTop: 5 }}>15kW</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{ ...Utils.Typography.FONT_REGULAR, fontSize: 16,color: Utils.Colors.GREY_COLOR, marginTop: 10 }}>Port type: CSS</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center',...Utils.Mixins.boxShadow('black') }}>
                            <Image source={require('../../../assets/images/verified.png')} style={{ resizeMode: 'center', backgroundColor: 'green', height: 24, width: 24, borderRadius: 12 }} />
                            <Text style={{ ...Utils.Typography.FONT_BOLD, fontSize: 16, color: Utils.Colors.GREEN_COLOR, marginLeft: 5 }}>Available</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

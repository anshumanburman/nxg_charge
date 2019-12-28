import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import * as Style from '../../styles';



const CommonHeader = (props) => {
    const { headerTitle,onPress,tintColor } = props;

    return (
        <>
            <View style={{ height: 64, flexDirection: "row", alignItems: "center", }}>

                <TouchableOpacity onPress={onPress}>



                    <Image style={{ resizeMode: 'center', height: 20, width: 20, marginLeft: 15,tintColor }} source={require('../../../assets/images/back.png')} />

                </TouchableOpacity>
                <Text style={{...styles.title,color:tintColor}}>{headerTitle}</Text>

            </View>


        </>



    );


}


const styles = StyleSheet.create({

    title: {

        fontSize: Style.Typography.FONT_SIZE_16,
        marginLeft: 10,
        ...Style.Typography.FONT_MEDIUM,
        color:Style.Colors.GREY_COLOR
    }

})

export default CommonHeader;
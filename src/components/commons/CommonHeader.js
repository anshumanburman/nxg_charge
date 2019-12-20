import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import * as Style from '../../styles';



const CommonHeader = (props) => {
    const { headerTitle } = props;

    const goBack = () => {
        props.navigation.goBack();

    }

    return (
        <>
            <View style={{ height: 64, flexDirection: "row", alignItems: "center", }}>

                <TouchableOpacity onPress={() => goBack()}>



                    <Image style={{ resizeMode: 'center', height: 20, width: 20, marginLeft: 15, }} source={require('../../../assets/images/back.png')} />

                </TouchableOpacity>
                <Text style={[styles.title, Style.Typography.FONT_MEDIUM]}>{headerTitle}</Text>

            </View>


        </>



    );


}


const styles = StyleSheet.create({

    title: {

        fontSize: Style.Typography.FONT_SIZE_18,
        marginLeft: 10
    }

})

export default CommonHeader;
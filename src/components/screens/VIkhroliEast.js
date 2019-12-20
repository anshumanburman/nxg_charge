import React, { useState } from 'react';
import CommonDropDown from '../commons/CommonDropDown';
import CommonHeader from '../commons/CommonHeader';
import CommonTextInput from '../commons/CommonTxtInput';
import CustomButton from '../commons/CustomButton';

import { Text, View, StyleSheet } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import * as Style from '../../styles';




const VikhroliEast = (props) => {

    const [isState, setIsState] = useState(false);
    return (
        <>
            <CommonHeader navigation={props.navigation} headerTitle={"Vikhroli East"} />
            <CommonDropDown labelName={"Date"} style={{ marginTop: 40 }} />

            <CommonDropDown labelName={"Time"} style={{ marginTop: 20 }} />

            <Text style={[{ marginTop: 20, marginLeft: 30, fontSize: 18 }, Style.Typography.FONT_BOLD]}> Charging Option</Text>
            <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'space-between', alignItems: "center" }}>

                <Text style={{ marginLeft: 30 }}>Full charge your ev</Text><Switch style={{ marginRight: 30 }} />



            </View>
            <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 30, alignItems: 'center' }}>
                <Text style={[!isState ? styles.selected : styles.unselected]}>Unit </Text>
                <Text style={[isState ? styles.selected : styles.unselected], { marginLeft: 35 }}>Price</Text>

            </View>


            <CommonTextInput placeholder={"Enter Unit"} txtStyle={{ marginTop: 10 }} />

            <CustomButton btnTitle={"Proceed"} btnStyle={[{ marginTop: 40 }, styles.btn,]} />



        </>

    )
}

const styles = StyleSheet.create({

    btn: {
        marginLeft: 60,
        marginRight: 60,
        marginTop: 40

    },
    selected: {
        color: Style.Colors.SIGN_COLOR,
        fontSize: Style.Typography.FONT_SIZE_24,
        fontFamily: Style.Typography.FONT_FAMILY_EXTRA_BOLD,
        fontWeight: Style.Typography.FONT_WEIGHT_EXTRA_BOLD,

    },
    unselected: {
        color: Style.Colors.GREY_COLOR,
        fontSize: Style.Typography.FONT_SIZE_16,
        fontFamily: Style.Typography.FONT_FAMILY_REGULAR,
        fontWeight: Style.Typography.FONT_WEIGHT_REGULAR,

    },




})



export default VikhroliEast;
import React from 'react';

import * as Style from '../../styles';
import { View, StyleSheet, TextInput, ScrollView, Text } from 'react-native';

import CommonTextInput from '../commons/CommonTxtInput';

import CommonDropDown from '../commons/CommonDropDown';

import CustomButton from '../commons/CustomButton';
import CommonHeader from '../commons/CommonHeader';





const Help = (props) => {
    return (

        <>
            <CommonHeader navigation={props.navigation} />


            <CommonDropDown labelName={'Ticket Type'} style={{ marginTop: 50 }} />

            <CommonTextInput placeholder={'Ticket Title'} txtStyle={styles.ticket} />
            <CommonTextInput placeholder={'Ticket Discription'} txtStyle={[styles.ticket, styles.disc]} multiLine={true} />
            <CustomButton btnTitle={'Submit'} btnStyle={styles.btn} />







        </>

    )
}

const styles = StyleSheet.create({

    ticket: {
        marginTop: 30

    },
    disc: {
        height: 150,
        textAlignVertical: "top"




    },
    btn: {
        marginLeft: 60,
        marginRight: 60,
        marginTop: 40

    }



})

export default Help;
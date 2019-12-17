

import React from 'react';
import { View, StyleSheet, TextInput, ScrollView, Text } from 'react-native';

import CommonTextInput from '../commons/CommonTxtInput';

import CommonDropDown from '../commons/CommonDropDown';

import CustomButton from '../commons/CustomButton';
import CommonHeader from '../commons/CommonHeader';


const AddEv = (props) => {


    return (
        <>
            <CommonHeader navigation={props.navigation} headerTitle={"Add Ev"} />


            <CommonDropDown labelName={'Make'} style={{ marginTop: 50 }} />
            <CommonDropDown labelName={'Model'} style={{ marginTop: 50 }} />


            <CommonTextInput placeholder={'Year'} txtStyle={styles.ticket} />
            <CommonTextInput placeholder={'VIN'} txtStyle={styles.ticket} />


            <CustomButton btnTitle={'Submit'} btnStyle={styles.btn} />





        </>



    )
}


const styles = StyleSheet.create({

    ticket: {
        marginTop: 30

    },

    btn: {
        marginLeft: 60,
        marginRight: 60,
        marginTop: 40

    }



})

export default AddEv;
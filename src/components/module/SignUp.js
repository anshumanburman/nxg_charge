import React, { useState } from 'react';

import { View, StyleSheet, TextInput, ScrollView } from 'react-native';


import CommonTextInput from '../commons/CommonTxtInput';
import CustomButton from '../commons/CustomButton';

import CheckBox from 'react-native-check-box'
import * as Style from '../../styles';



const SignUpForm = () => {
    const [isChecked, setIsCheked] = useState(false)
    return (
        <>
            <ScrollView>

                <CommonTextInput placeholder={"Name"} />
                <CommonTextInput placeholder={"Email"} txtStyle={styles.email} />
                <CommonTextInput placeholder={"Mobile No."} txtStyle={styles.email} />
                <CommonTextInput placeholder={"Password"} txtStyle={styles.email} />
                <CommonTextInput placeholder={"Confirm password"} txtStyle={styles.email} />

                <CheckBox
                    style={{ padding: 10, marginLeft: Style.Mixins.scaleSize(20) }}
                    onClick={() => setIsCheked(!isChecked)

                    }
                    checkBoxColor={Style.Colors.GREEN_COLOR}
                    isChecked={isChecked}
                    rightText={"CheckBox"}
                />

                <CustomButton btnStyle={styles.signUp}
                    btnTitle={"sign Up"} />

            </ScrollView>
        </>

    );

}
const styles = StyleSheet.create({

    email: {
        marginTop: 20
    },
    signUp: {
        width: Style.Mixins.scaleSize(135),
        alignSelf: 'flex-end'
    }



})

export default SignUpForm;
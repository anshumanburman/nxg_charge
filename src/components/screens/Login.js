
import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import * as Style from '../../styles';
import { SafeAreaView } from 'react-navigation';
import CommonTextInput from '../commons/CommonTxtInput';
import CarLogo from '../commons/CarImage';
import LoginForm from '../module/LoginForm';
import SignUpForm from '../module/SignUp';

const Login = (props) => {
    const [isSignIn, setIsSignIn] = useState(true);

    const isSelectedSignIn = (bool) => {
        setIsSignIn(bool)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Style.Spacing.SCALE_52 }}>
                    <TouchableOpacity style={styles.signIn} onPress={() => isSelectedSignIn(true)}>
                        <Text style={isSignIn ? styles.selected : styles.unselected}>Sign In</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUp} onPress={() => isSelectedSignIn(false)}>
                        <Text style={!isSignIn ? styles.selected : styles.unselected}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.carImg}><CarLogo /></View>
                <View style={styles.form}>
                    {isSignIn ? <LoginForm navigation={props.navigation} /> : <SignUpForm />}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Style.Colors.WHITE
    },
    signIn: {
        marginLeft: Style.Spacing.SCALE_30,

    },
    signUp: {
        marginLeft: Style.Spacing.SCALE_45,

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
    carImg: {
        // marginLeft:Style.Mixins.scaleSize(30),
        marginTop: Style.Mixins.scaleSize(50),
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        marginTop: Style.Mixins.scaleSize(85)
    }
})

export default Login;
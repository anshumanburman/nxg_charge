import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import * as Style from '../../styles';
import {SafeAreaView} from 'react-navigation';
import CommonTextInput from '../commons/CommonTxtInput';
import CarLogo from '../commons/CarImage';
import LoginForm from '../module/LoginForm';

const Login = ()=> {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:Style.Spacing.SCALE_52 }}>
                    <TouchableOpacity style={styles.signIn}>
                        <Text style={styles.selected}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUp}>
                        <Text style={styles.unselected}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.carImg}><CarLogo /></View>
                <View style={styles.form}>
                    <LoginForm />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:Style.Colors.WHITE
    },
    signIn : {
        marginLeft:Style.Spacing.SCALE_30,
        
    },
    signUp : {
        marginLeft:Style.Spacing.SCALE_45,
        
    },
    selected :{
        color:Style.Colors.SIGN_COLOR,
        fontSize: Style.Typography.FONT_SIZE_24,
        fontFamily:Style.Typography.FONT_FAMILY_EXTRA_BOLD,
        fontWeight:Style.Typography.FONT_WEIGHT_EXTRA_BOLD,
        
    },
    unselected : {
        color:Style.Colors.GREY_COLOR,
        fontSize: Style.Typography.FONT_SIZE_16,
        fontFamily:Style.Typography.FONT_FAMILY_REGULAR,
        fontWeight:Style.Typography.FONT_WEIGHT_REGULAR,
        
    },
    carImg : {
       // marginLeft:Style.Mixins.scaleSize(30),
        marginTop:Style.Mixins.scaleSize(50),
        justifyContent:'center',
        alignItems:'center'
    },
    form : {
marginTop:Style.Mixins.scaleSize(85)
    }
})

export default Login;
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import * as Style from '../../styles';
import {SafeAreaView} from 'react-navigation';
import CommonTextInput from '../commons/CommonTxtInput';

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
                <CommonTextInput placeholder={"Mobile No."} />
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
        
    }
})

export default Login;
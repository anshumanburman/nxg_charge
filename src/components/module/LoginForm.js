import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import * as Style from '../../styles';
import CommonTextInput from '../commons/CommonTxtInput';
import CustomButton from '../commons/CustomButton';


const LoginForm = (props) => {
    return (
        <>
            <CommonTextInput placeholder={"Mobile No."} />
            <CommonTextInput placeholder={"Password"} txtStyle={styles.password} />
            <Text style={styles.forget} onPress={() => props.navigation.navigate(Style.Constants.KEY_ADD_EV)}>Forgot Password</Text>
            <View style={styles.btnBg}>
                <Text style={styles.skip}>Skip</Text>
                <CustomButton btnStyle={styles.signIn}
                    btnTitle="sign In" />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    password: {
        marginTop: Style.Mixins.scaleSize(25)
    },
    forget: {
        textAlign: 'right',
        marginRight: Style.Mixins.scaleSize(30),
        fontFamily: Style.Typography.FONT_FAMILY_REGULAR,
        fontWeight: Style.Typography.FONT_WEIGHT_REGULAR,
        fontSize: Style.Typography.FONT_SIZE_14,
        color: Style.Colors.GREY_COLOR,
        marginTop: Style.Mixins.scaleSize(15)
    },
    btnBg: {
        // backgroundColor:'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Style.Mixins.scaleSize(65)
    },
    skip: {
        color: Style.Colors.GREEN_COLOR,
        fontFamily: Style.Typography.FONT_FAMILY_REGULAR,
        fontWeight: Style.Typography.FONT_WEIGHT_REGULAR,
        fontSize: Style.Typography.FONT_SIZE_16,
        textAlign: 'center',
        flex: 1
    },
    signIn: {
        width: Style.Mixins.scaleSize(135)
    }
})
export default LoginForm;
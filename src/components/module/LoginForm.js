import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    KeyboardAvoidingView
} from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import * as Style from '../../styles';
import CommonTextInput from '../commons/CommonTxtInput';
import CustomButton from '../commons/CustomButton';
import { loginAction } from '../../actions/action';
import CustomLoader from '../commons/CustomLoader';
import * as Validation from '../../res/validations';


const LoginForm = (props) => {
    const [mobileInput, setMobileInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
let mobileRef = useRef(null);

    const { loginRes, fetching, error } = useSelector(state => ({
        loginRes: state.loginReducer.data,
        fetching: state.loginReducer.fetching,
        error: state.loginReducer.error,
    }), shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("login res :::: ", loginRes, + "::::: ",fetching  + "::::::: ",error );
        // console.log("mobileRef ::::::: ",mobileRef );
        // console.log("mobileRef value ::::::: ",mobileRef.props.value );
        // alert("res ::: ",loginRes)
        if (loginRes!= undefined && loginRes.status === 108){
                  alert(loginRes.message);
             }else if (loginRes!= undefined && loginRes.status === 200 || loginRes!= undefined && loginRes.status===312){
                props.navigation.navigate(Style.Constants.KEY_HOME)
             }
    });


  const loginBtn = () => {
    if(Validation.IsMobileNumber(mobileRef)==false){return}
    dispatch(loginAction({
        "mobile_number": mobileInput,
        "password": passwordInput,
        "user_type": "driver",
        "device_id": "7E0049D5-5C02-4B97-989D-CFC0F8D26652",
        "device_token": "eo-7WkSfxm0:APA91bFQT3CXCyYlsax73DW_HLjuZ4UZVs_twUNhtHINPQUOZq6n2GxMynUD8CIFHwYQDHq1s4_DX7z99q_212ibBH8azXBQD0yRF0GZHFHNXZsHf49Up4EyKtblv8yHgLNuxLc0mL04",
        "device_type": Platform.OS==='ios'?"ios":"android"
    }));
   // props.navigation.navigate(Style.Constants.KEY_HOME)
  }


    //loginRes.fetching ? 
    // if (fetching) {
    //     return (<View style={styles.container}><CustomLoader loading={fetching} /></View>);
    //   }
    //else 
    // if (error) {
    //     return alert(error);
    // }else if (loginRes!= undefined && loginRes.status === 108){
    //      alert(loginRes.message);
    // }
    // else 
    return (
        <>
        
            <CommonTextInput placeholder={"Mobile No."} onChangeText={(text)=>setMobileInput(text)} value={mobileInput} refValue={ref => mobileRef = ref} keyboardType={Style.Constants.KB_TYPE_PHONE}/>
            <CommonTextInput placeholder={"Password"} txtStyle={styles.password} onChangeText={(text)=>setPasswordInput(text)} keyboardType={Style.Constants.KB_TYPE_DEFAULT} onSubmitEditing={()=>loginBtn()}/>
            <Text style={styles.forget} onPress={() => props.navigation.navigate(Style.Constants.KEY_FILTER)}>Forgot Password</Text>
            <View style={styles.btnBg}>
                <Text style={styles.skip}>Skip</Text>
                <CustomButton
                    btnStyle={styles.signIn}
                    btnTitle="sign In"
                    onPress={() => loginBtn()}

                />
            </View>
            <CustomLoader loading={fetching} />
            {/* {loginRes!= undefined && loginRes.status === 108 ? alert(loginRes.message):null} */}
            
        </>
    )
}
const styles = StyleSheet.create({
    password: {
        marginTop: Style.Mixins.scaleSize(25)
    },
    forget: {
        marginRight: Style.Mixins.scaleSize(30),
        fontFamily: Style.Typography.FONT_FAMILY_REGULAR,
        fontWeight: Style.Typography.FONT_WEIGHT_REGULAR,
        fontSize: Style.Typography.FONT_SIZE_14,
        color: Style.Colors.GREY_COLOR,
        marginTop: Style.Mixins.scaleSize(15),
        alignSelf:'flex-end'
        
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
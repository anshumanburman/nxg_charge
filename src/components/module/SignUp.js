import React, { useState, useEffect,useRef } from 'react';

import { View, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { signUpAction } from '../../actions/action';



import CommonTextInput from '../commons/CommonTxtInput';
import CustomButton from '../commons/CustomButton';

import CheckBox from 'react-native-check-box'
import * as Style from '../../styles';
import CustomLoader from '../commons/CustomLoader';
import * as Validation from '../../res/validations';
import toast from '../commons/CustomToast';




const SignUpForm = (props) => {
    const [isChecked, setIsCheked] = useState(false)
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [mobileInput, setMobileInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
    let nameRef = useRef(null);
    let emailRef = useRef(null);
    let mobileRef = useRef(null);
    let passwordRef = useRef(null);
    let coonfirmPasswordRef = useRef(null);

    const { respose, fetching, error } = useSelector(state => ({
        respose: state.signUpReducer.data,
        fetching: state.signUpReducer.fetching,
        error: state.signUpReducer.error,
    }), shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
         console.log("sign up res :::: ", respose, + "::::: ",fetching  + "::::::: ",error );
        // console.log("mobileRef ::::::: ",mobileRef );
        // console.log("mobileRef value ::::::: ",mobileRef.props.value );
        // alert("res ::: ",loginRes)
        if (respose!= undefined && respose.status >= 100 && respose!= undefined && respose.status < 200){
                  toast(respose.message);
             }else if (respose!= undefined && respose.status === 200 || respose!= undefined && respose.status===312){
                props.navigation.navigate(Style.Constants.KEY_APP)
             }
    },[respose]);
const signUpBtn = ()=>{
    if (Validation.isValidRegister(nameRef,emailRef,mobileRef,passwordRef,coonfirmPasswordRef) == false) { return }
    dispatch(signUpAction({
        "name": nameInput,
        "email": emailInput,
        "mobile_number": mobileInput,
        "password": passwordInput,
        "country": "india",
        "state": "rajasthan",
        "city": "jaipur",
        "device_id": "12345",
        "device_token": "dtoken",
        "device_type":"iosa"
    }))
}


    return (
        <>
            

                <CommonTextInput placeholder={"Name"} onChangeText={(text) => setNameInput(text)} value={nameInput} refValue={ref => nameRef = ref} keyboardType={Style.Constants.KB_TYPE_DEFAULT} onSubmitEditing={() => emailRef.focus()}/>
                <CommonTextInput placeholder={"Email"} txtStyle={styles.email} onChangeText={(text) => setEmailInput(text)} value={emailInput} refValue={ref => emailRef = ref} keyboardType={Style.Constants.KB_TYPE_EMAIL} onSubmitEditing={() => mobileRef.focus()}/>
                <CommonTextInput placeholder={"Mobile No."} txtStyle={styles.email} onChangeText={(text) => text.length <= 10 ? setMobileInput(text) : passwordRef.focus()} value={mobileInput} refValue={ref => mobileRef = ref} keyboardType={Style.Constants.KB_TYPE_PHONE} onSubmitEditing={() => passwordRef.focus()}/>
                <CommonTextInput placeholder={"Password"} txtStyle={styles.email} onChangeText={(text) => setPasswordInput(text)} value={passwordInput} refValue={ref => passwordRef = ref} keyboardType={Style.Constants.KB_TYPE_DEFAULT} onSubmitEditing={() => coonfirmPasswordRef.focus()} secureTextEntry={true}/>
                <CommonTextInput placeholder={"Confirm password"} txtStyle={styles.email} onChangeText={(text) => setConfirmPasswordInput(text)} value={confirmPasswordInput} refValue={ref => coonfirmPasswordRef = ref} keyboardType={Style.Constants.KB_TYPE_DEFAULT} onSubmitEditing={() => coonfirmPasswordRef.blur()} secureTextEntry={true}/>

                <CheckBox
                    style={{ padding: 10, marginLeft: Style.Mixins.scaleSize(20) }}
                    onClick={() => setIsCheked(!isChecked)

                    }
                    checkBoxColor={Style.Colors.GREEN_COLOR}
                    isChecked={isChecked}
                    rightText={"CheckBox"}
                />

                <CustomButton btnStyle={styles.signUp}
                    btnTitle={"sign Up"} 
                    onPress={() => signUpBtn()}
                    />

<CustomLoader loading={fetching} />
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
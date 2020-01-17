import React, { useState, useEffect, useRef } from 'react';
import { View,StyleSheet,Keyboard } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import CommonHeader from '../commons/CommonHeader';
import * as Style from '../../styles';
import CommonTextInput from '../commons/CommonTxtInput';
import CustomButton from '../commons/CustomButton';
import * as Validation from '../../res/validations';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { changePasswordAction} from '../../actions/action';
import toast from '../commons/CustomToast';



const ChangePassword = ({navigation})=> {
    const [currentPasswordInput, setCurrentPasswordInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
    let currentPasswordRef = useRef(null);
    let passwordRef = useRef(null);
    let coonfirmPasswordRef = useRef(null);


    const { response, fetching, error } = useSelector(state => ({
        response: state.changePasswordReducer.data,
        fetching: state.changePasswordReducer.fetching,
        error: state.changePasswordReducer.error,
    }), shallowEqual);
    const dispatch = useDispatch();


useEffect(()=>{
    //console.warn("navigation :::: ",navigation);
    Style.AsyncStorage.getData(Style.Constants.KEY_USER_DETAILS).then((item)=>{
        let jsonDate = JSON.parse(item)
        global.userID = jsonDate.id
        console.log("global.userID :::::: ",global.userID);
      })
    
},[]);
useEffect(()=>{
    console.log("change password :::: ", response, + "::::: ", fetching + "::::::: ", error);
    if (response != undefined) {
        //alert(loginRes.message);
        toast(response.message)
    }
},[response]);




const updatePassword = ()=>{
    Keyboard.dismiss();
if (Validation.isValidChangePassword(currentPasswordRef,passwordRef,coonfirmPasswordRef)=== false) {return}
dispatch(changePasswordAction({
    user_id:global.userID,
    password:currentPasswordRef.props.value,
    new_password:passwordRef.props.value,
    device_id:"12345"
}))
};

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <CommonHeader headerTitle={'Change Password'} onPress={() => navigation.goBack()} />
                <CommonTextInput placeholder={"Current Password"} txtStyle={styles.email} onChangeText={(text) => setCurrentPasswordInput(text)} value={currentPasswordInput} refValue={ref => currentPasswordRef = ref} keyboardType={Style.Constants.KB_TYPE_DEFAULT} onSubmitEditing={() => passwordRef.focus()} secureTextEntry={true} />
                <CommonTextInput placeholder={"New Password"} txtStyle={styles.email} onChangeText={(text) => setPasswordInput(text)} value={passwordInput} refValue={ref => passwordRef = ref} keyboardType={Style.Constants.KB_TYPE_DEFAULT} onSubmitEditing={() => coonfirmPasswordRef.focus()} secureTextEntry={true} />
                <CommonTextInput placeholder={"Confirm password"} txtStyle={styles.email} onChangeText={(text) => setConfirmPasswordInput(text)} value={confirmPasswordInput} refValue={ref => coonfirmPasswordRef = ref} keyboardType={Style.Constants.KB_TYPE_DEFAULT} onSubmitEditing={() => coonfirmPasswordRef.blur()} secureTextEntry={true} />
                <CustomButton btnTitle={'Update'} btnStyle={styles.btn} onPress={()=>updatePassword()
                }/>
            </View>
        </SafeAreaView>
    )
}
 const styles = StyleSheet.create({
     container  : {
         flex: 1,
         backgroundColor:'white'
     },
     email: {
        marginTop: 20
    },
    btn: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 40

    }
 })


export default ChangePassword;
import {

    LOGIN_METHOD,
    SIGN_UP_METHOD,
    FORGOT_PASSWORD_METHOD,
    FORGOT_PASSWORD_FAILURE
} from './Types';
import { KEY_FORGOT_PASSWORD } from '../res/constants';

export function loginAction(data){
    return {
        type : LOGIN_METHOD,
        payload : data
    }
}
export function signUpAction(data){
    return {
        type : SIGN_UP_METHOD,
        payload : data
    }
}
export function forgotPasswordAction(data){
    return {
        type : FORGOT_PASSWORD_METHOD,
        payload : data
    }
}
export function forgotPasswordClear(){
    return {
        type:FORGOT_PASSWORD_FAILURE
    }
}
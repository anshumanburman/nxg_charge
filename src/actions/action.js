import {

    LOGIN_METHOD,
    SIGN_UP_METHOD,
} from './Types';

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
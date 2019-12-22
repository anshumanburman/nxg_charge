import {

    LOGIN_METHOD
} from './Types';

export function loginAction(data){
    return {
        type : LOGIN_METHOD,
        payload : data
    }
}
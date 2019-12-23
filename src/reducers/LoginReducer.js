import * as Types from '../actions/Types';
import { State } from 'react-native-gesture-handler';

const initialState = {
    fetching : false,
    data : null,
    error :null
    
}

export default function loginReducer(state = {}, action) {
    console.log("action ::: ",action.type  + ":::: ",action.payload);
    
    switch (action.type) {
        case Types.LOGIN_METHOD:
        return {...state, fetching : true, error : null};
        case Types.API_CALL_SUCCESS :
        return {...state, fetching: false, data: action.payload};
        case Types.API_CALL_FAILURE:
        return {...state, fetching : false, data:null, error: action.error};
        default:
        return state;
    }
}
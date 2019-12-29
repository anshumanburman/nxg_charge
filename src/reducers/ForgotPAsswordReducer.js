import * as Types from '../actions/Types';

const initialState = {
    fetching : false,
    data : null,
    error :null
    
}

export default function forgotPasswordReducer(state = {}, action) {
    console.log("action ::: ",action.type  + ":::: ",action.payload);
    
    switch (action.type) {
        case Types.FORGOT_PASSWORD_METHOD:
        return {...state, fetching : true, error : null};
        case Types.FORGOT_PASSWORD_SUCCESS :
        return {...state, fetching: false, data: action.payload};
        case Types.FORGOT_PASSWORD_FAILURE:
        return {...state, fetching : false, data:null, error: action.error};
        default:
        return state;
    }
}
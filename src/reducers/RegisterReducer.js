import * as Types from '../actions/Types';


export default function signUpReducer(state = {}, action) {
    //console.log("action ::: ",action.type  + ":::: ",action.payload);
    
    switch (action.type) {
        case Types.SIGN_UP_METHOD:
        return {...state, fetching : true, error : null};
        case Types.SIGN_UP_SUCCESS :
        return {...state, fetching: false, data: action.payload};
        case Types.SIGN_UP_FAILURE:
        return {...state, fetching : false, data:null, error: action.error};
        default:
        return state;
    }
}
import * as Types from '../actions/Types';


export default function changePasswordReducer(state = {}, action) {
    console.log("action ::: ",action.type  + ":::: ",action.payload);
    
    switch (action.type) {
        case Types.CHANGE_PASSWORD_METHOD:
        return {...state, fetching : true, error : null};
        case Types.CHANGE_PASSWORD_SUCCESS :
        return {...state, fetching: false, data: action.payload};
        case Types.CHANGE_PASSWORD_FAILURE:
        return {...state, fetching : false, data:null, error: action.error};
        default:
        return state;
    }
}
import {combineReducers} from 'redux';
import loginReducer from './LoginReducer';
import signUpReducer from './RegisterReducer';

const rootReducer = combineReducers({
    loginReducer,
    signUpReducer
});
export default rootReducer;
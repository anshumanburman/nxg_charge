import {combineReducers} from 'redux';
import loginReducer from './LoginReducer';
import signUpReducer from './RegisterReducer';
import forgotPasswordREducer from './ForgotPAsswordReducer';

const rootReducer = combineReducers({
    loginReducer,
    signUpReducer,
    forgotPasswordREducer
});
export default rootReducer;
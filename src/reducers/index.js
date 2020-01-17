import {combineReducers} from 'redux';
import loginReducer from './LoginReducer';
import signUpReducer from './RegisterReducer';
import forgotPasswordREducer from './ForgotPAsswordReducer';
import changePasswordReducer from './ChangePasswordReducer';

const rootReducer = combineReducers({
    loginReducer,
    signUpReducer,
    forgotPasswordREducer,
    changePasswordReducer
});
export default rootReducer;
import {all,takeLatest} from 'redux-saga/effects';


import {loginAction,signUpAction,forgotPasswordAction} from './saga';
import {LOGIN_METHOD,SIGN_UP_METHOD,FORGOT_PASSWORD_METHOD} from '../actions/Types';


function* watchLoginAction(){
    yield takeLatest(LOGIN_METHOD, loginAction )
}

function* watchSignUpction(){
    yield takeLatest(SIGN_UP_METHOD, signUpAction )
}

function* watchforgotPasswordAction(){
    yield takeLatest(FORGOT_PASSWORD_METHOD, forgotPasswordAction )
}


function* rootSaga(){
    yield all([
          watchLoginAction(),
          watchSignUpction(),
          watchforgotPasswordAction(),
    ])
}

export default rootSaga;
import {all,takeLatest, put} from 'redux-saga/effects';
import {
LOGIN_METHOD,
API_CALL_SUCCESS,
API_CALL_FAILURE,
SIGN_UP_METHOD,
SIGN_UP_SUCCESS,
SIGN_UP_FAILURE,
FORGOT_PASSWORD_METHOD,
FORGOT_PASSWORD_SUCCESS,
FORGOT_PASSWORD_FAILURE
} from '../actions/Types';

import callApis from '../services/apiCall';

export function* loginAction(action){
    console.log('action in saga :::: ',action)
      try {
        const data = yield callApis(action)
        console.log('data fetch login ::::: ',data)
        yield put({type: API_CALL_SUCCESS,payload: data})
  //       if (data.status == 200 || data.status==312 )
  //   yield put({ type: API_CALL_SUCCESS, payload: data })
  // else
  //   yield put({ type: API_CALL_FAILURE, error: data })

      }catch(e){
        yield put({type: API_CALL_FAILURE})
      }
  }
  // function* watchLoginAction(){
  //     yield takeLatest(LOGIN_METHOD, loginAction )
  // }
  
  //SIGN UP
 export function* signUpAction(action){
    console.log('action in saga signUpAction :::: ',action)
      try {
        const data = yield callApis(action)
        console.log('data fetch login ::::: ',data)
        yield put({type: SIGN_UP_SUCCESS,payload: data})
  
      }catch(e){
        yield put({type: SIGN_UP_FAILURE})
      }
  }
  // function* watchSignUpction(){
  //     yield takeLatest(SIGN_UP_METHOD, signUpAction )
  // }
  //FORGOT PASSWORD
 export function* forgotPasswordAction(action){
    console.log('action in saga signUpAction :::: ',action)
      try {
        const data = yield callApis(action)
        console.log('data fetch login ::::: ',data)
        yield put({type: FORGOT_PASSWORD_SUCCESS,payload: data})
  
      }catch(e){
        yield put({type: FORGOT_PASSWORD_FAILURE})
      }
  }
  // function* watchforgotPasswordAction(){
  //     yield takeLatest(FORGOT_PASSWORD_METHOD, forgotPasswordAction )
  // }
  
  //*************************** */
  // function* dataSaga(){
  //     yield all([
  //           watchLoginAction(),
  //           watchSignUpction(),
  //           watchforgotPasswordAction(),
  //     ])
  // }
  
  // export default dataSaga;
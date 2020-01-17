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
      }catch(e){
        yield put({type: API_CALL_FAILURE})
      }
  }
  
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
  //CHANGE PASSWORD
 export function* changePasswordAction(action){
    console.log('action in saga signUpAction :::: ',action)
      try {
        const data = yield callApis(action)
        console.log('data fetch login ::::: ',data)
        yield put({type: CHANGE_PASSWORD_SUCCESS,payload: data})
  
      }catch(e){
        yield put({type: CHANGE_PASSWORD_FAILURE})
      }
  }
  
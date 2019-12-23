import {all,takeLatest, put} from 'redux-saga/effects';
import {
LOGIN_METHOD,
API_CALL_SUCCESS,
API_CALL_FAILURE
} from '../actions/Types';

import callApis from '../services/apiCall';

function* loginAction(action){
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
  function* watchLoginAction(){
      yield takeLatest(LOGIN_METHOD, loginAction )
  }
  
  //*************************** */
  function* dataSaga(){
      yield all([
            watchLoginAction()
      ])
  }
  
  export default dataSaga;
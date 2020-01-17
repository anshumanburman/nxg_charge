export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";

const BASE_URL = 'http://206.189.116.120/nxg/api/'

export const LOGIN_METHOD = BASE_URL + 'login';
export const SIGN_UP_METHOD = BASE_URL + 'userRegister';
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

//forgotPassword
export const FORGOT_PASSWORD_METHOD = BASE_URL + 'forgotPassword';
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILURE = "FORGOT_PASSWORD_FAILURE";

//Change Password
export const CHANGE_PASSWORD_METHOD = BASE_URL + 'changePassword';
export const CHANGE_PASSWORD_SUCCESS = "change_password_success";
export const CHANGE_PASSWORD_FAILURE = "change_password_failure";
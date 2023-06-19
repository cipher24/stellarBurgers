import { requestNorma } from '../../utils/burger-api';
import { getCookie } from '../../utils/cookie';

export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';
export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const PATCH_PROFILE_ERROR = 'PATCH_PROFILE_ERROR';
export const PATCH_PROFILE_REQUEST = 'PATCH_PROFILE_REQUEST';
export const PATCH_PROFILE_SUCCESS = 'PATCH_PROFILE_SUCCESS';
export const AUTH_CHECKED = 'AUTH_CHECKED';


export function getProfileRequest() {
  return function (dispatch) {
    console.log('requesting user info from server...');
    dispatch({
      type: GET_PROFILE_REQUEST
    })
    requestNorma('auth/user')
      .then(answer => {
        console.log(answer);
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: answer.user
        })
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e);
        dispatch({
          type: GET_PROFILE_ERROR
        })

      })
  }
}


export function patchProfileRequest(payload) {
  return function (dispatch) {
    console.log('updating user info on server...');
    dispatch({
      type: PATCH_PROFILE_REQUEST
    })
    requestNorma('auth/user', "PATCH", payload)
      .then(answer => {
        console.log('Updated profile info: ')
        console.log(answer);
        dispatch({
          type: PATCH_PROFILE_SUCCESS,
          payload: answer.user
        })
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e);
        dispatch({
          type: PATCH_PROFILE_ERROR
        })
      })
  }
}

export function checkAuthorization() {
  return function (dispatch) {
    if (getCookie('token')) {
      requestNorma('auth/user')
      .then(answer => {
        console.log(answer);
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: answer.user
        })
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e);
      })
      .finally(()=> {
        dispatch({
          type: AUTH_CHECKED
        })
      })
         
    } else dispatch({
      type: AUTH_CHECKED
    })
  }
}
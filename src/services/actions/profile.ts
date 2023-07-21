import { requestNorma } from '../../utils/burger-api';
import { getCookie } from '../../utils/cookie';
import type { AppDispatch, TRequestProps, TUser } from '../../utils/types';

export const GET_PROFILE_ERROR: 'GET_PROFILE_ERROR' = 'GET_PROFILE_ERROR';
export const GET_PROFILE_REQUEST: 'GET_PROFILE_REQUEST' = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS' = 'GET_PROFILE_SUCCESS';
export const PATCH_PROFILE_ERROR: 'PATCH_PROFILE_ERROR' = 'PATCH_PROFILE_ERROR';
export const PATCH_PROFILE_REQUEST: 'PATCH_PROFILE_REQUEST' = 'PATCH_PROFILE_REQUEST';
export const PATCH_PROFILE_SUCCESS: 'PATCH_PROFILE_SUCCESS' = 'PATCH_PROFILE_SUCCESS';
export const AUTH_CHECKED: 'AUTH_CHECKED' = 'AUTH_CHECKED';
export const RESET_PROFILE: 'RESET_PROFILE' = 'RESET_PROFILE';


export interface IGetProfileRequest {
  readonly type: typeof GET_PROFILE_REQUEST;
}
export interface IGetProfileSuccess {
  readonly type: typeof GET_PROFILE_SUCCESS;
  readonly payload: TUser;
}
export interface IGetProfileError {
  readonly type: typeof GET_PROFILE_ERROR;
}
export interface IPatchProfileRequest {
  readonly type: typeof PATCH_PROFILE_REQUEST;
}
export interface IPatchProfileSuccess {
  readonly type: typeof PATCH_PROFILE_SUCCESS;
  readonly payload: TUser;
}
export interface IPatchProfileError {
  readonly type: typeof PATCH_PROFILE_ERROR;
}
export interface IAuthChecked {
  readonly type: typeof AUTH_CHECKED;
}
export interface IResetProfile {
  readonly type: typeof RESET_PROFILE;
}

export type TProfileActions =
  | IGetProfileError
  | IGetProfileRequest
  | IGetProfileSuccess
  | IPatchProfileError
  | IPatchProfileSuccess
  | IPatchProfileRequest
  | IResetProfile
  | IAuthChecked;


export function getProfileRequest() {
  return function (dispatch: AppDispatch) {
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


export function patchProfileRequest(payload: TRequestProps) {
  return function (dispatch: AppDispatch) {
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
  return function (dispatch: AppDispatch) {
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
        .finally(() => {
          dispatch({
            type: AUTH_CHECKED
          })
        })

    } else dispatch({
      type: AUTH_CHECKED
    })
  }
}
import { requestNorma } from '../../utils/burger-api';
import { deleteCookie } from '../../utils/cookie';
import { RESET_PROFILE } from './profile';
import { AppDispatch, TAnswerError, TRequestProps } from '../../utils/types';

export const LOGOUT_ERROR: 'LOGOUT_ERROR' = 'LOGOUT_ERROR';
export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutError {
  readonly type: typeof LOGOUT_ERROR;
  readonly payload: TAnswerError;
}
export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
}

export type TLogoutActions = 
|ILogoutRequest
|ILogoutError
|ILogoutSuccess;

export function logoutRequest() {
  return function (dispatch: AppDispatch) {
    let value: TRequestProps | null = null;
    let token = localStorage.getItem('refreshToken');
    console.log('local=', token);
    if (token) {
      value = {
        // 'token': JSON.parse(localStorage.getItem('refreshToken'))
        'token': JSON.parse(token)
      }
    }
    console.log('Sending refreshToken to server :', value);
    dispatch({
      type: LOGOUT_REQUEST
    })
    requestNorma('auth/logout', "POST", value)
      .then(answer => {
        console.log(answer);
        deleteCookie('token');
        localStorage.removeItem('refreshToken');
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        dispatch({
          type: RESET_PROFILE,
        })
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e.message);
        dispatch({
          type: LOGOUT_ERROR,
          payload: e
        })
      })
  }
}

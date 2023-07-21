import { requestNorma } from '../../utils/burger-api';
import { updateTokens } from '../../utils/update-tokens';
import { AppDispatch, TRequestProps } from '../../utils/types';
import { GET_PROFILE_SUCCESS } from './profile';

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_ERROR: 'LOGIN_ERROR' = 'LOGIN_ERROR';

export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST
}
export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS
}
export interface ILoginError {
  readonly type: typeof LOGIN_ERROR
}

export type TLoginActions =
  | ILoginRequest
  | ILoginSuccess
  | ILoginError;

export function loginRequest(value: TRequestProps) {

  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_REQUEST
    })
    requestNorma('auth/login', "POST", value)
      .then(answer => {
        console.log(answer);
        updateTokens(answer);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: answer.user
        })
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: answer.user
        })
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e);
        dispatch({
          type: LOGIN_ERROR
        })
      })
  }
}


import { requestNorma } from '../../utils/burger-api';
import { AppDispatch, TRequestProps } from '../../utils/types';

export const FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS' = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR: 'FORGOT_PASSWORD_ERROR' = 'FORGOT_PASSWORD_ERROR';
export const FORGOT_PASSWORD_INIT: 'FORGOT_PASSWORD_INIT' = 'FORGOT_PASSWORD_INIT';

export interface IForgotPasswordRequest {
  readonly type: typeof FORGOT_PASSWORD_REQUEST
}
export interface IForgotPasswordSuccess {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS
}
export interface IForgotPasswordError {
  readonly type: typeof FORGOT_PASSWORD_ERROR;
  readonly payload: string;
}
export interface IForgotPasswordInit {
  readonly type: typeof FORGOT_PASSWORD_INIT
}

export type TForgotPasswordActions =
  | IForgotPasswordRequest
  | IForgotPasswordSuccess
  | IForgotPasswordError
  | IForgotPasswordInit;

export const forgotPasswordInit = (): IForgotPasswordInit => {
  return {
    type: FORGOT_PASSWORD_INIT
  }
}

export function forgotPasswordRequest(value: TRequestProps) {
  return function (dispatch: AppDispatch) {
    console.log('Sending to server: ', value);
    dispatch({
      type: FORGOT_PASSWORD_REQUEST
    })
    requestNorma('password-reset', "POST", value)
      .then(answer => {
        console.log(answer);
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
        })
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e.message);
        dispatch({
          type: FORGOT_PASSWORD_ERROR,
          payload: e.message
        })
      })
  }
}


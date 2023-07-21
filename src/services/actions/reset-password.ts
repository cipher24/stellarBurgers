import { requestNorma } from '../../utils/burger-api';
import { AppDispatch, TRequestProps } from '../../utils/types';

export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR' = 'RESET_PASSWORD_ERROR';
export const RESET_PASSWORD_INIT: 'RESET_PASSWORD_INIT' = 'RESET_PASSWORD_INIT';

export interface IResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}
export interface IResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}
export interface IResetPasswordError {
  readonly type: typeof RESET_PASSWORD_ERROR;
}
export interface IResetPasswordInit {
  readonly type: typeof RESET_PASSWORD_INIT;
}
export type TResetPasswordActions =
  | IResetPasswordRequest
  | IResetPasswordSuccess
  | IResetPasswordError
  | IResetPasswordInit;

export function resetPasswordInit(): IResetPasswordInit {
  return {
    type: RESET_PASSWORD_INIT
  }
}

export function resetPasswordRequest(value: TRequestProps) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    })
    requestNorma('password-reset/reset', "POST", value)
      .then(answer => {
        console.log(answer);
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
        })
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e);
        dispatch({
          type: RESET_PASSWORD_ERROR
        })
      })
  }
}

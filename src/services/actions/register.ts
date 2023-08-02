import { requestNorma } from '../../utils/burger-api';
import { updateTokens } from '../../utils/update-tokens';
import { AppDispatch, TRequestProps } from '../../utils/types';
import { GET_PROFILE_SUCCESS } from './profile';

export const REGISTER_REQUEST: 'REGISTER_REQUEST' = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';
export const REGISTER_ERROR: 'REGISTER_ERROR' = 'REGISTER_ERROR';
export const REGISTER_INIT: 'REGISTER_INIT' = 'REGISTER_INIT';

export interface IRegisterRequest {
  readonly type: typeof REGISTER_REQUEST;
}
export interface IRegisterSuccess {
  readonly type: typeof REGISTER_SUCCESS;
}
export interface IRegisterError {
  readonly type: typeof REGISTER_ERROR;
  readonly payload: string
}
export interface IRegisterInit {
  readonly type: typeof REGISTER_INIT;
}
export type TRegisterActions =
  | IRegisterRequest
  | IRegisterSuccess
  | IRegisterError
  | IRegisterInit;

export function registerInit(): IRegisterInit {
  return {
    type: REGISTER_INIT
  }
}

export function registerRequest(value: TRequestProps) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTER_REQUEST
    })
    requestNorma('auth/register', "POST", value)
      .then(answer => {
        console.log(answer);
        console.log('Успешная регистрация');
        updateTokens(answer);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: answer.user
        })
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: answer.user
        })
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e.message);
        dispatch({
          type: REGISTER_ERROR,
          payload: e.message
        })
      })
  }
}

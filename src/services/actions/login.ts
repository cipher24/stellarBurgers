import { requestNorma } from '../../utils/burger-api';
import { updateTokens } from '../../utils/update-tokens';
import { TRequestProps } from '../../utils/types';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function loginRequest(value: TRequestProps) {

  return function (dispatch: any) {
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
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e);
        dispatch({
          type: LOGIN_ERROR
        })
      })
  }
}

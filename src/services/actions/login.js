import { requestNorma } from '../../utils/burger-api';
import {updateTokens} from '../../utils/update-tokens';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function loginRequest(value) {

  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST
    })
    requestNorma('auth/login',"POST", value)
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

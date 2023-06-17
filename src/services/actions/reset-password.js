import { requestNorma } from '../../utils/burger-api';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';
export const RESET_PASSWORD_INIT = 'RESET_PASSWORD_INIT';

export function resetPasswordInit() {
  return {
    type: RESET_PASSWORD_INIT
  }
}

export function resetPasswordRequest(value) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    })
    requestNorma('password-reset/reset', "POST", value)
    .then(answer=>{
      console.log(answer);
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
      })
    })
    .catch(e => {
      console.log('ОШИБКА! : ', e);
      dispatch({
        type:  RESET_PASSWORD_ERROR
      })
    }) 
  }
}

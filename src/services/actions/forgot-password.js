import { requestNorma } from '../../utils/burger-api';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';
export const FORGOT_PASSWORD_INIT = 'FORGOT_PASSWORD_INIT';


export const forgotPasswordInit = () => {
  return {
    type: FORGOT_PASSWORD_INIT
  }
}

export function forgotPasswordRequest(value) {
  return function (dispatch) {
    console.log('Sending to server: ', value);
    dispatch({
      type: FORGOT_PASSWORD_REQUEST
    })
    requestNorma('password-reset',"POST", value)
    .then(answer=>{
      console.log(answer);
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
      })
    })
    .catch(e => {
      console.log('ОШИБКА! : ', e);
      dispatch({
        type:  FORGOT_PASSWORD_ERROR
      })
    }) 
  }
}

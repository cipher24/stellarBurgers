import { requestNorma } from '../../utils/burger-api';
import { updateTokens } from '../../utils/update-tokens';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_INIT = 'REGISTER_INIT';

export function registerInit() {
  return {
    type: REGISTER_INIT
  }
}

export function registerRequest(value) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_REQUEST
    })
    requestNorma('auth/register',"POST", value)
    .then(answer=>{
      console.log(answer);
      console.log('Успешная регистрация');
      updateTokens(answer);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: answer.user
      })
    })
    .catch(e => {
      console.log('ОШИБКА! : ', e);
      dispatch({
        type:  REGISTER_ERROR
      })
    }) 
  }
}

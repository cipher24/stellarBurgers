import {requestNorma} from '../../utils/burger-api';
import { setCookie, deleteCookie } from '../../utils/cookie';
import {updateTokens} from '../../utils/update-tokens';

export const LOGOUT_ERROR = 'LOGOUT_ERROR'; 
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'; 
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'; 


export function logoutRequest(){
    return function (dispatch) {
      let value = {
        'token':JSON.parse(localStorage.getItem('refreshToken'))
      }
      console.log('Sending refreshToken to server :', value);
      dispatch({
        type: LOGOUT_REQUEST
      })
      requestNorma('auth/logout',"POST", value)
      .then(answer=>{
        console.log(answer);
        deleteCookie('token');
        localStorage.removeItem('refreshToken');
        dispatch({
          type: LOGOUT_SUCCESS,
        })
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e);
        dispatch({
          type:  LOGOUT_ERROR
        })
      }) 
    }
  }
  
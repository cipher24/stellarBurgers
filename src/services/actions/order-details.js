import { postToServer, requestNorma } from '../../utils/burger-api';

export const POST_REQUEST = 'POST_REQUEST'; 
export const POST_ERROR = 'POST_ERROR'; 
export const POST_SUCCESS = 'POST_SUCCESS'; 
export const CLOSE_ORDER = 'CLOSE_ORDER';


export function requestServer(ids) {
  return function (dispatch) {
    dispatch({
      type: POST_REQUEST
    })
    console.log('Запрос к серверу на оформление заказа..');
    requestNorma('orders',"POST", ids)
    .then(data=>{
      console.log('Запрос успешен.')
      dispatch({
        type: POST_SUCCESS,
        payload: data
      })
    })
    .catch(e => {
      console.log('ОШИБКА! : ', e);
      dispatch({
        type:  POST_ERROR
      })
    })
  }
}

export function closeOrder() {
  return {
    type: CLOSE_ORDER
  }
}
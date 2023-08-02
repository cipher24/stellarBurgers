
import { requestNorma } from '../../utils/burger-api';
import { AppDispatch, TAnswerData, TAnswerError } from '../../utils/types';

export const REQUEST_ORDER_REQUEST: 'REQUEST_ORDER_REQUEST' = 'REQUEST_ORDER_REQUEST';
export const REQUEST_ORDER_SUCCESS: 'REQUEST_ORDER_SUCCESS' = 'REQUEST_ORDER_SUCCESS';
export const REQUEST_ORDER_ERROR: 'REQUEST_ORDER_ERROR' = 'REQUEST_ORDER_ERROR';

export interface IRequestOrderRequest {
  readonly type: typeof REQUEST_ORDER_REQUEST,
}
export interface IRequestOrderSuccess {
  readonly type: typeof REQUEST_ORDER_SUCCESS,
  readonly payload: TAnswerData,
}
export interface IRequestOrderError {
  readonly type: typeof REQUEST_ORDER_ERROR,
  readonly payload: string,
}
export type TRequestOrderActions =
  IRequestOrderRequest
  | IRequestOrderSuccess
  | IRequestOrderError;

export function requestOrder(number: string) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REQUEST_ORDER_REQUEST
    })
    console.log('Запрос к серверу получение заказа по номеру..');
    requestNorma(`orders/${number}`)
      .then(data => {
        console.log('Запрос успешен.');
        dispatch({
          type: REQUEST_ORDER_SUCCESS,
          payload: data
        });
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e.message);
        dispatch({
          type: REQUEST_ORDER_ERROR,
          payload: e.message
        })
      })
  }
}

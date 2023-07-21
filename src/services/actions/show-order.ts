
import { requestNorma } from '../../utils/burger-api';
import { AppDispatch } from '../../utils/types';

export const SHOW_ORDER_REQUEST: 'SHOW_ORDER_REQUEST' = 'SHOW_ORDER_REQUEST';
export const SHOW_ORDER_SUCCESS: 'SHOW_ORDER_SUCCESS' = 'SHOW_ORDER_SUCCESS';
export const SHOW_ORDER_ERROR: 'SHOW_ORDER_ERROR' = 'SHOW_ORDER_ERROR';

export interface IShowOrderRequest {
  readonly type: typeof SHOW_ORDER_REQUEST,
}
export interface IShowOrderSuccess {
  readonly type: typeof SHOW_ORDER_SUCCESS,
  readonly payload: any,
}
export interface IShowOrderError {
  readonly type: typeof SHOW_ORDER_ERROR,
  readonly payload: string,
}
export type TShowOrderActions =
  IShowOrderRequest
  | IShowOrderSuccess
  | IShowOrderError;

export function requestOrder(number: string) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: SHOW_ORDER_REQUEST
    })
    console.log('Запрос к серверу на оформление заказа..');
    requestNorma(`orders/${number}`)
      .then(data => {
        console.log('Запрос успешен.');
        dispatch({
          type: SHOW_ORDER_SUCCESS,
          payload: data
        });
  })
      .catch(e => {
        console.log('ОШИБКА! : ', e);
        dispatch({
          type: SHOW_ORDER_ERROR,
          payload: e
        })
      })
  }
}
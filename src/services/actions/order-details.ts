import { requestNorma } from '../../utils/burger-api';
import { AppDispatch, TAnswerError } from '../../utils/types';
import { CONSTRUCTOR_INIT } from './burger-constructor';
import { RESET_COUNTS } from './burger-ingredients';
import type { IElementTemp } from '../../utils/types';

export const POST_REQUEST: 'POST_REQUEST' = 'POST_REQUEST';
export const POST_ERROR: 'POST_ERROR' = 'POST_ERROR';
export const POST_SUCCESS: 'POST_SUCCESS' = 'POST_SUCCESS';
export const CLOSE_ORDER: 'CLOSE_ORDER' = 'CLOSE_ORDER';

export interface IOrderRequest {
  readonly type: typeof POST_REQUEST;
}
export interface IOrderSuccess {
  readonly type: typeof POST_SUCCESS;
  readonly payload: TData;
}
export interface IOrderError {
  readonly type: typeof POST_ERROR;
  readonly payload: TAnswerError;
}
export interface IOrderClose {
  readonly type: typeof CLOSE_ORDER;
}

export type TOrderActions =
  | IOrderRequest
  | IOrderSuccess
  | IOrderError
  | IOrderClose;
  
//дополнительный тип для ответа с сервера при оформлении заказа
export type TAnswer = {
  ingredients: IElementTemp[];
  _id: string;
  owner: TOwner;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  price: number;
}

//дополнительный тип для поля в типе ответа с сервера
type TOwner = {
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
export type TData = {
  success: boolean;
  name: string;
  order: TAnswer;
}
type TProps = { ingredients: Array<string> };

export function requestServer(ids: TProps) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: POST_REQUEST
    })
    console.log('Запрос к серверу на оформление заказа..');
    requestNorma('orders', "POST", ids)
      .then(data => {
        console.log('Запрос успешен.');
        dispatch({
          type: POST_SUCCESS,
          payload: data
        });
        dispatch({
          type: CONSTRUCTOR_INIT
        });
        dispatch({
          type: RESET_COUNTS
        });
      })
      .catch(e => {
        console.log('ОШИБКА! : ', e.message);
        dispatch({
          type: POST_ERROR,
          payload: e
        })
      })
  }
}

export function closeOrder(): IOrderClose {
  return {
    type: CLOSE_ORDER
  }
}


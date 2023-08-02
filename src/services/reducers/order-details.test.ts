import reducer from './order-details';
import {
  POST_REQUEST,
  POST_ERROR,
  POST_SUCCESS,
  CLOSE_ORDER,
  TOrderActions
} from "../actions/order-details";
import { MockOrderDetails } from '../../utils/mock-data';

describe('test order-details reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TOrderActions)).toEqual({
      orderNumber: null,
      answer: null,
      isOrderError: null,
      isShowOrder: false
    })
  });
  it('should handle POST_REQUEST', () => {
    expect(reducer({
      orderNumber: null,
      answer: MockOrderDetails,
      isOrderError: 'Ошибка запроса',
      isShowOrder: false
    }, {
      type: POST_REQUEST
    })).toEqual({
      orderNumber: null,
      answer: null,
      isOrderError: null,
      isShowOrder: true
    })
  });
  it('should handle POST_SUCCESS', () => {
    expect(reducer({
      orderNumber: null,
      answer: null,
      isOrderError: null,
      isShowOrder: false
    }, {
      type: POST_SUCCESS,
      payload: MockOrderDetails
    })).toEqual({
      orderNumber: MockOrderDetails.order.number,
      answer: MockOrderDetails,
      isOrderError: null,
      isShowOrder: true
    })
  })
  it('should handle POST_ERROR', () => {
    expect(reducer({
      orderNumber: null,
      answer: MockOrderDetails,
      isOrderError: null,
      isShowOrder: false
    }, {
      type: POST_ERROR,
      payload: 'Такой пользователь существует'
    })).toEqual({
      orderNumber: null,
      answer: null,
      isOrderError: 'Такой пользователь существует',
      isShowOrder: false
    })
  });
  it('should handle CLOSE_ORDER', () => {
    expect(reducer({
      orderNumber: MockOrderDetails.order.number,
      answer: MockOrderDetails,
      isOrderError: null,
      isShowOrder: true
    }, {
      type: CLOSE_ORDER
    })).toEqual({
      orderNumber: MockOrderDetails.order.number,
      answer: MockOrderDetails,
      isOrderError: null,
      isShowOrder: false
    })
  });


});
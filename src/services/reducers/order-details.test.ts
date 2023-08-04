import reducer from './order-details';
import {
  POST_REQUEST,
  POST_ERROR,
  POST_SUCCESS,
  CLOSE_ORDER,
  TOrderActions
} from "../actions/order-details";
import { MockOrderDetails } from '../../utils/mock-data';
import { initialState } from './order-details';

const stateWithData = {
  ...initialState,
  orderNumber: MockOrderDetails.order.number,
  answer: MockOrderDetails,
  isShowOrder: true
};

describe('test order-details reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TOrderActions)).toEqual(initialState)
  });
  it('should handle POST_REQUEST', () => {
    expect(reducer({
      ...initialState,
      isOrderError: "Ошибка запроса"
    }, {
      type: POST_REQUEST
    })).toEqual({
      ...initialState,
      isShowOrder: true
    })
  });
  it('should handle POST_SUCCESS', () => {
    expect(reducer(initialState, {
      type: POST_SUCCESS,
      payload: MockOrderDetails
    })).toEqual(stateWithData)
  })
  it('should handle POST_ERROR', () => {
    expect(reducer(initialState, {
      type: POST_ERROR,
      payload: 'Такой пользователь существует'
    })).toEqual({
      ...initialState,
      isOrderError: 'Такой пользователь существует'
    })
  });
  it('should handle CLOSE_ORDER', () => {
    expect(reducer(stateWithData, {
      type: CLOSE_ORDER
    })).toEqual({
      ...stateWithData,
      isShowOrder: false
    })
  });
})
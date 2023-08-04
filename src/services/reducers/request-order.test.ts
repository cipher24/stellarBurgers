import reducer from './request-order';
import { MockServerAnswer, MockFailedAnswer } from '../../utils/mock-data';
import {
  TRequestOrderActions,
  REQUEST_ORDER_SUCCESS,
  REQUEST_ORDER_ERROR,
  REQUEST_ORDER_REQUEST
} from '../actions/request-order';
import { initialState } from './request-order';

describe('test request-order reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TRequestOrderActions)).toEqual(initialState)
  })
  it('should handle REQUEST_ORDER_SUCCESS', () => {
    expect(reducer(initialState, {
      type: REQUEST_ORDER_SUCCESS,
      payload: MockServerAnswer
    })).toEqual({
      ...initialState,
      answerData: MockServerAnswer
    })
  })
  it('should handle REQUEST_ORDER_ERROR', () => {
    expect(reducer(initialState, {
      type: REQUEST_ORDER_ERROR,
      payload: MockFailedAnswer.message
    })).toEqual({
      ...initialState,
      isError: MockFailedAnswer.message
    })
  })
  it('should handle REQUEST_ORDER_REQUEST', () => {
    expect(reducer({
      ...initialState,
      isError: 'Ошибка 500'
    }, {
      type: REQUEST_ORDER_REQUEST
    })).toEqual(initialState)
  })

})
import reducer from './request-order';
import { MockServerAnswer, MockFailedAnswer } from '../../utils/mock-data';
import {
  TRequestOrderActions,
  REQUEST_ORDER_SUCCESS,
  REQUEST_ORDER_ERROR,
  REQUEST_ORDER_REQUEST
} from '../actions/request-order';

describe('test request-order reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TRequestOrderActions)).toEqual({
      answerData: null,
      isError: null
    })
  })
  it('should handle REQUEST_ORDER_SUCCESS', () => {
    expect(reducer({
      answerData: null,
      isError: null
    }, {
      type: REQUEST_ORDER_SUCCESS,
      payload: MockServerAnswer
    })).toEqual({
      isError: null,
      answerData: MockServerAnswer
    })
  })
  it('should handle REQUEST_ORDER_ERROR', () => {
    expect(reducer({
      answerData: null,
      isError: null
    }, {
      type: REQUEST_ORDER_ERROR,
      payload: MockFailedAnswer.message
    })).toEqual({
      isError: MockFailedAnswer.message,
      answerData: null
    })
  })
  it('should handle REQUEST_ORDER_REQUEST', () => {
    expect(reducer({
      answerData: null,
      isError: 'Ошибка 500'
    }, {
      type: REQUEST_ORDER_REQUEST
    })).toEqual({
      isError: null,
      answerData: null
    })
  })

})
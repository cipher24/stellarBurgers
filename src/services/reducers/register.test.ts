import reducer from './register';
import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_INIT,
  TRegisterActions
} from '../actions/register';
import { initialState } from './register';

const stateWithSuccessRegistration = {
  ...initialState,
  isSuccessRegistration: true
}

describe('test register reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TRegisterActions)).toEqual(initialState)
  });
  it('should handle REGISTER_REQUEST', () => {
    expect(reducer(stateWithSuccessRegistration, {
      type: REGISTER_REQUEST
    })).toEqual(initialState)
  });
  it('should handle REGISTER_INIT', () => {
    expect(reducer(stateWithSuccessRegistration, {
      type: REGISTER_INIT
    })).toEqual(initialState)
  });
  it('should handle REGISTER_SUCCESS', () => {
    expect(reducer(initialState, {
      type: REGISTER_SUCCESS,
    })).toEqual(stateWithSuccessRegistration)
  })
  it('should handle REGISTER_ERROR', () => {
    expect(reducer(stateWithSuccessRegistration, {
      type: REGISTER_ERROR,
      payload: 'Такой пользователь существует'
    })).toEqual({
      ...initialState,
      isError: 'Такой пользователь существует'
    })
  });


})
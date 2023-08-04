import reducer from './forgot-password';
import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_INIT,
  TForgotPasswordActions
} from "../actions/forgot-password";
import { initialState } from './forgot-password';

const stateWithEmailExist = {
  ...initialState,
  isExistedEmail: true
}

describe('test forgot-password reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TForgotPasswordActions)).toEqual(initialState)
  });
  it('should handle FORGOT_PASSWORD_INIT', () => {
    expect(reducer(stateWithEmailExist, {
      type: FORGOT_PASSWORD_INIT
    })).toEqual(initialState);
  });
  it('should handle FORGOT_PASSWORD_REQUEST', () => {
    expect(reducer(stateWithEmailExist, {
      type: FORGOT_PASSWORD_REQUEST
    })).toEqual(initialState);
  });
  it('should handle FORGOT_PASSWORD_SUCCESS', () => {
    expect(reducer(initialState, {
      type: FORGOT_PASSWORD_SUCCESS,
    })).toEqual(stateWithEmailExist)
  })
  it('should handle FORGOT_PASSWORD_ERROR', () => {
    expect(reducer(stateWithEmailExist, {
      type: FORGOT_PASSWORD_ERROR,
      payload: 'Такого пользователя не существует'
    })).toEqual({
      ...initialState,
      isError: 'Такого пользователя не существует'
    })
  });


})
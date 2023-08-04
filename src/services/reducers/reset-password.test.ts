import reducer from './reset-password';
import {
  TResetPasswordActions,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_INIT,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS
} from '../actions/reset-password';
import { initialState } from './reset-password';

const stateWithSuccess = {
  ...initialState,
  isSuccessReset: true
}

describe('test reset-password reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TResetPasswordActions)).toEqual(initialState)
  });
  it('should handle RESET_PASSWORD_REQUEST', () => {
    expect(reducer(stateWithSuccess, {
      type: RESET_PASSWORD_REQUEST
    })).toEqual(initialState)
  });
  it('should handle RESET_PASSWORD_SUCCESS', () => {
    expect(reducer(initialState, {
      type: RESET_PASSWORD_SUCCESS,
    })).toEqual(stateWithSuccess)
  })
  it('should handle RESET_PASSWORD_ERROR', () => {
    expect(reducer(initialState, {
      type: RESET_PASSWORD_ERROR,
      payload: 'неверный токен'
    })).toEqual({
      ...initialState,
      isError: 'неверный токен'
    })
  });
  it('should handle RESET_PASSWORD_INIT', () => {
    expect(reducer(stateWithSuccess, {
      type: RESET_PASSWORD_INIT
    })).toEqual(initialState)
  });

})
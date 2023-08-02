import reducer from './reset-password';
import {
  TResetPasswordActions,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_INIT,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS
} from '../actions/reset-password';

describe('test reset-password reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TResetPasswordActions)).toEqual({
      isSuccessReset: false,
      isError: null
    })
  });
  it('should handle RESET_PASSWORD_REQUEST', () => {
    expect(reducer({
      isSuccessReset: true,
      isError: null
    }, {
      type: RESET_PASSWORD_REQUEST
    })).toEqual({
      isSuccessReset: false,
      isError: null
    })
  });
  it('should handle RESET_PASSWORD_SUCCESS', () => {
    expect(reducer({
      isSuccessReset: false,
      isError: null
    }, {
      type: RESET_PASSWORD_SUCCESS,
    })).toEqual({
      isSuccessReset: true,
      isError: null
    })
  })
  it('should handle RESET_PASSWORD_ERROR', () => {
    expect(reducer({
      isSuccessReset: false,
      isError: null
    }, {
      type: RESET_PASSWORD_ERROR,
      payload: 'неверный токен'
    })).toEqual({
      isError: 'неверный токен',
      isSuccessReset: false
    })
  });
  it('should handle RESET_PASSWORD_INIT', () => {
    expect(reducer({
      isSuccessReset: true,
      isError: null
    }, {
      type: RESET_PASSWORD_INIT
    })).toEqual({
      isSuccessReset: false,
      isError: null
    })
  });

})
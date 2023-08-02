import reducer from './forgot-password';
import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_INIT,
  TForgotPasswordActions
} from "../actions/forgot-password";

describe('test forgot-password reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TForgotPasswordActions)).toEqual({
      isExistedEmail: false,
      isError: null
    })
  });
  it('should handle FORGOT_PASSWORD_INIT', () => {
    expect(reducer({
      isExistedEmail: true,
      isError: null
    }, {
      type: FORGOT_PASSWORD_INIT
    })).toEqual({
      isExistedEmail: false,
      isError: null
    })
  });
  it('should handle FORGOT_PASSWORD_REQUEST', () => {
    expect(reducer({
      isExistedEmail: true,
      isError: null
    }, {
      type: FORGOT_PASSWORD_REQUEST
    })).toEqual({
      isExistedEmail: false,
      isError: null
    })
  });
  it('should handle FORGOT_PASSWORD_SUCCESS', () => {
    expect(reducer({
      isExistedEmail: false,
      isError: null
    }, {
      type: FORGOT_PASSWORD_SUCCESS,
    })).toEqual({
      isExistedEmail: true,
      isError: null
    })
  })
  it('should handle FORGOT_PASSWORD_ERROR', () => {
    expect(reducer({
      isExistedEmail: true,
      isError: null
    }, {
      type: FORGOT_PASSWORD_ERROR,
      payload: 'Такого пользователя не существует'
    })).toEqual({
      isError: 'Такого пользователя не существует',
      isExistedEmail: false
    })
  });


})
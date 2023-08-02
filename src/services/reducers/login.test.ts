import reducer from './login';
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  TLoginActions
} from "../actions/login";

describe('test login reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TLoginActions)).toEqual({
      isSuccessLogin: false,
      isError: null
    })
  });

  it('should handle LOGIN_REQUEST', () => {
    expect(reducer({
      isSuccessLogin: true,
      isError: null
    }, {
      type: LOGIN_REQUEST
    })).toEqual({
      isSuccessLogin: false,
      isError: null
    })
  });
  it('should handle LOGIN_SUCCESS', () => {
    expect(reducer({
      isSuccessLogin: false,
      isError: null
    }, {
      type: LOGIN_SUCCESS,
    })).toEqual({
      isSuccessLogin: true,
      isError: null
    })
  })
  it('should handle LOGIN_ERROR', () => {
    expect(reducer({
      isSuccessLogin: false,
      isError: null
    }, {
      type: LOGIN_ERROR,
      payload: 'Такого пользователя не существует или неверный пароль'
    })).toEqual({
      isSuccessLogin: false,
      isError: 'Такого пользователя не существует или неверный пароль'
    })
  });


})
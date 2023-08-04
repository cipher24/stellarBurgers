import reducer from './login';
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  TLoginActions
} from "../actions/login";
import { initialState } from './login';

describe('test login reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TLoginActions)).toEqual(initialState)
  });

  it('should handle LOGIN_REQUEST', () => {
    expect(reducer({
      ...initialState,
      isSuccessLogin: true
    }, {
      type: LOGIN_REQUEST
    })).toEqual(initialState)
  });
  it('should handle LOGIN_SUCCESS', () => {
    expect(reducer(initialState, {
      type: LOGIN_SUCCESS,
    })).toEqual({
      ...initialState,
      isSuccessLogin: true
    })
  })
  it('should handle LOGIN_ERROR', () => {
    expect(reducer(initialState, {
      type: LOGIN_ERROR,
      payload: 'Такого пользователя не существует или неверный пароль'
    })).toEqual({
      ...initialState,
      isError: 'Такого пользователя не существует или неверный пароль'
    })
  });


})
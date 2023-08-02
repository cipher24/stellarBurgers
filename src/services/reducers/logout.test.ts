import reducer from './logout';
import {
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  TLogoutActions
} from "../actions/logout";

describe('test logout reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TLogoutActions)).toEqual({
      isError: null
    })
  });
  it('should handle LOGOUT_REQUEST', () => {
    expect(reducer({
      isError: 'неверный токен'
    }, {
      type: LOGOUT_REQUEST
    })).toEqual({
      isError: null
    })
  });
  it('should handle LOGOUT_SUCCESS', () => {
    expect(reducer({
      isError: 'неверный токен'
    }, {
      type: LOGOUT_SUCCESS,
    })).toEqual({
      isError: null
    })
  })
  it('should handle LOGOUT_ERROR', () => {
    expect(reducer({
      isError: null
    }, {
      type: LOGOUT_ERROR,
      payload: 'Такой пользователь существует'
    })).toEqual({
      isError: 'Такой пользователь существует'
    })
  });


})
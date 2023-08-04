import reducer from './logout';
import {
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  TLogoutActions
} from "../actions/logout";
import { initialState } from './logout';

describe('test logout reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TLogoutActions)).toEqual(initialState)
  });
  it('should handle LOGOUT_REQUEST', () => {
    expect(reducer({
      ...initialState,
      isError: 'неверный токен'
    }, {
      type: LOGOUT_REQUEST
    })).toEqual(initialState)
  });
  it('should handle LOGOUT_SUCCESS', () => {
    expect(reducer({
      ...initialState,
      isError: 'неверный токен'
    }, {
      type: LOGOUT_SUCCESS,
    })).toEqual(initialState)
  })
  it('should handle LOGOUT_ERROR', () => {
    expect(reducer(initialState, {
      type: LOGOUT_ERROR,
      payload: 'Такой пользователь существует'
    })).toEqual({
      ...initialState,
      isError: 'Такой пользователь существует'
    })
  });


})
import reducer from './profile';
import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_REQUEST,
  PATCH_PROFILE_ERROR,
  PATCH_PROFILE_SUCCESS,
  PATCH_PROFILE_REQUEST,
  AUTH_CHECKED,
  AUTH_RESET,
  RESET_PROFILE,
  TProfileActions
} from "../actions/profile";
import { MockUserData } from '../../utils/mock-data';

describe('test profile reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TProfileActions)).toEqual({
      user: null,
      isSuccessRequest: false,
      isError: null,
      isAuthChecked: false
    })
  });
  it('should handle GET_PROFILE_REQUEST', () => {
    expect(reducer({
      user: null,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: false
    }, {
      type: GET_PROFILE_REQUEST
    })).toEqual({
      user: null,
      isSuccessRequest: false,
      isError: null,
      isAuthChecked: false
    })
  });
  it('should handle PATCH_PROFILE_REQUEST', () => {
    expect(reducer({
      user: null,
      isSuccessRequest: true,
      isError: 'Ошибка запроса',
      isAuthChecked: false
    }, {
      type: PATCH_PROFILE_REQUEST
    })).toEqual({
      user: null,
      isSuccessRequest: false,
      isError: null,
      isAuthChecked: false
    })
  });
  it('should handle GET_PROFILE_SUCCESS', () => {
    expect(reducer({
      user: null,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: false
    }, {
      type: GET_PROFILE_SUCCESS,
      payload: MockUserData
    })).toEqual({
      user: MockUserData,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: false
    })
  });
  it('should handle PATCH_PROFILE_SUCCESS', () => {
    expect(reducer({
      user: null,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: false
    }, {
      type: PATCH_PROFILE_SUCCESS,
      payload: MockUserData
    })).toEqual({
      user: MockUserData,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: false
    })
  });
  it('should handle GET_PROFILE_ERROR', () => {
    expect(reducer({
      user: MockUserData,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: false
    }, {
      type: GET_PROFILE_ERROR,
      payload: 'Неверный токен'
    })).toEqual({
      user: MockUserData,
      isSuccessRequest: false,
      isError: 'Неверный токен',
      isAuthChecked: false
    })
  });
  it('should handle PATCH_PROFILE_ERROR', () => {
    expect(reducer({
      user: MockUserData,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: false
    }, {
      type: PATCH_PROFILE_ERROR,
      payload: 'Неверный токен'
    })).toEqual({
      user: MockUserData,
      isSuccessRequest: false,
      isError: 'Неверный токен',
      isAuthChecked: false
    })
  });
  it('should handle RESET_PROFILE', () => {
    expect(reducer({
      user: MockUserData,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: false
    }, {
      type: RESET_PROFILE
    })).toEqual({
      user: null,
      isSuccessRequest: false,
      isError: null,
      isAuthChecked: false
    })
  });
  it('should handle AUTH_CHECKED', () => {
    expect(reducer({
      user: MockUserData,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: false
    }, {
      type: AUTH_CHECKED
    })).toEqual({
      user: MockUserData,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: true
    })
  });
  it('should handle AUTH_RESET', () => {
    expect(reducer({
      user: MockUserData,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: true
    }, {
      type: AUTH_RESET
    })).toEqual({
      user: MockUserData,
      isSuccessRequest: true,
      isError: null,
      isAuthChecked: false
    })
  });

});
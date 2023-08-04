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
import { initialState } from './profile';

const stateWithUserData = {
  ...initialState,
  user: MockUserData,
  isAuthChecked: false,
  isSuccessRequest: true
}
const stateWithUserDataAndAuth = {
  ...stateWithUserData,
  isAuthChecked: true
}
const initialStateWithAuth = {
  ...initialState,
  isAuthChecked: true
}

describe('test profile reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as TProfileActions)).toEqual(initialState)
  });
  it('should handle GET_PROFILE_REQUEST', () => {
    expect(reducer(initialStateWithAuth, {
      type: GET_PROFILE_REQUEST
    })).toEqual(initialStateWithAuth)
  });
  it('should handle PATCH_PROFILE_REQUEST', () => {
    expect(reducer(initialStateWithAuth, {
      type: PATCH_PROFILE_REQUEST
    })).toEqual(initialStateWithAuth)
  });
  it('should handle GET_PROFILE_SUCCESS', () => {
    expect(reducer(initialState, {
      type: GET_PROFILE_SUCCESS,
      payload: MockUserData
    })).toEqual(stateWithUserData)
  });
  it('should handle PATCH_PROFILE_SUCCESS', () => {
    expect(reducer({
      ...initialState,
      isAuthChecked: true
    }, {
      type: PATCH_PROFILE_SUCCESS,
      payload: MockUserData
    })).toEqual(stateWithUserDataAndAuth)
  });
  it('should handle GET_PROFILE_ERROR', () => {
    expect(reducer(stateWithUserData, {
      type: GET_PROFILE_ERROR,
      payload: 'Неверный токен'
    })).toEqual({
      ...stateWithUserData,
      isSuccessRequest: false,
      isError: 'Неверный токен'
    })
  });
  it('should handle PATCH_PROFILE_ERROR', () => {
    expect(reducer(stateWithUserData, {
      type: PATCH_PROFILE_ERROR,
      payload: 'Неверный токен'
    })).toEqual({
      ...stateWithUserData,
      isSuccessRequest: false,
      isError: 'Неверный токен'
    })
  });
  it('should handle RESET_PROFILE', () => {
    expect(reducer(stateWithUserData, {
      type: RESET_PROFILE
    })).toEqual(initialState)
  });
  it('should handle AUTH_CHECKED', () => {
    expect(reducer(stateWithUserData, {
      type: AUTH_CHECKED
    })).toEqual(stateWithUserDataAndAuth)
  });
  it('should handle AUTH_RESET', () => {
    expect(reducer(stateWithUserDataAndAuth, {
      type: AUTH_RESET
    })).toEqual(stateWithUserData)
  });
});
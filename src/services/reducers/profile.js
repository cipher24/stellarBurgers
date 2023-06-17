import {
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_REQUEST,
  PATCH_PROFILE_ERROR,
  PATCH_PROFILE_SUCCESS,
  PATCH_PROFILE_REQUEST,
  AUTH_CHECKED
} from "../actions/profile";

import { LOGIN_SUCCESS } from '../actions/login';
import { LOGOUT_SUCCESS } from "../actions/logout";
import { REGISTER_SUCCESS } from "../actions/register";

const initialState = {
  user: null,
  isSuccessRequest: false,
  isError: false,
  isAuthChecked: false
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PATCH_PROFILE_REQUEST:
    case GET_PROFILE_REQUEST:
    case LOGOUT_SUCCESS: {
      return initialState
    }
    case PATCH_PROFILE_SUCCESS:
    case GET_PROFILE_SUCCESS:
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isSuccessRequest: true,
        isError: false,
        user: action.payload
      }
    }
    case PATCH_PROFILE_ERROR:
    case GET_PROFILE_ERROR: {
      return {
        ...state,
        isSuccessRequest: false,
        isError: true
      }
    }
    case AUTH_CHECKED: {
      return {
        ...state,
        isAuthChecked: true
      }
    }
    default: {
      return state
    }
  }
}
import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_INIT,
} from "../actions/forgot-password";

const initialState = {
  isExistedEmail: false,
  isError: false
}

export const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_INIT:
    case FORGOT_PASSWORD_REQUEST: {
      return initialState
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isExistedEmail: true,
        isError: false
      }
    }
    case FORGOT_PASSWORD_ERROR: {
      return {
        ...state,
        isError: true,
        isExistedEmail: false
      }
    }
    default: {
      return state
    }
  }
}
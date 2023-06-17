import {
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_INIT
} from "../actions/reset-password";

const initialState = {
  isSuccessReset: false,
  isError: false
}

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_INIT:
    case RESET_PASSWORD_REQUEST: {
      return initialState
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isSuccessReset: true,
        isError: false
      }
    }
    case RESET_PASSWORD_ERROR: {
      return {
        ...state,
        isError: true,
        isSuccessReset: false
      }
    }
    default: {
      return state
    }
  }
}
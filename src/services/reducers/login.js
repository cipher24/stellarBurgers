import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_REQUEST
} from "../actions/login";

const initialState = {
  isSuccessLogin: false,
  isError: false
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return initialState
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isSuccessLogin: true,
        isError: false
      }
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isSuccessLogin: false,
        isError: true
      }
    }
    default: {
      return state
    }
  }
}
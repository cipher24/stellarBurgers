import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_INIT
} from "../actions/register";

const initialState = {
  isSuccessRegistration: false,
  isError: false
}

export const registerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REGISTER_INIT:
    case REGISTER_REQUEST: {
      return initialState
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isSuccessRegistration: true,
        isError: false
      }
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        isError: true,
        isSuccessRegistration: false
      }
    }
    default: {
      return state
    }
  }
}
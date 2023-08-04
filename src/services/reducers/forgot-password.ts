import {
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_INIT,
  TForgotPasswordActions
} from "../actions/forgot-password";

type TInitialState = {
  isExistedEmail: boolean;
  isError: string | null;
}
export const initialState: TInitialState = {
  isExistedEmail: false,
  isError: null
}

export const forgotPasswordReducer = (state = initialState, action: TForgotPasswordActions): TInitialState => {
  switch (action.type) {
    case FORGOT_PASSWORD_INIT:
    case FORGOT_PASSWORD_REQUEST: {
      return initialState
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isExistedEmail: true,
        isError: null
      }
    }
    case FORGOT_PASSWORD_ERROR: {
      return {
        ...state,
        isError: action.payload,
        isExistedEmail: false
      }
    }
    default: {
      return state
    }
  }
}
export default forgotPasswordReducer;
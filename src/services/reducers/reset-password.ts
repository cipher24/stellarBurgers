import {
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_INIT
} from "../actions/reset-password";
import type { TResetPasswordActions } from "../actions/reset-password";

type TInitialState = {
  isSuccessReset: boolean;
  isError: string | null;
}
export const initialState: TInitialState = {
  isSuccessReset: false,
  isError: null
}

export const resetPasswordReducer = (state = initialState, action: TResetPasswordActions): TInitialState => {
  switch (action.type) {
    case RESET_PASSWORD_INIT:
    case RESET_PASSWORD_REQUEST: {
      return initialState
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isSuccessReset: true,
        isError: null
      }
    }
    case RESET_PASSWORD_ERROR: {
      return {
        ...state,
        isError: action.payload,
        isSuccessReset: false
      }
    }
    default: {
      return state
    }
  }
}
export default resetPasswordReducer;
import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_INIT
} from "../actions/register";

import type { TRegisterActions } from "../actions/register";
type TInitialState = {
  isSuccessRegistration: boolean;
  isError: boolean;
}
const initialState: TInitialState = {
  isSuccessRegistration: false,
  isError: false
}

export const registerReducer = (state = initialState, action: TRegisterActions): TInitialState => {
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
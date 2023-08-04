import {
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_INIT
} from "../actions/register";

import type { TRegisterActions } from "../actions/register";
type TInitialState = {
  isSuccessRegistration: boolean;
  isError: string | null;
}
export const initialState: TInitialState = {
  isSuccessRegistration: false,
  isError: null
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
        isError: null
      }
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        isError: action.payload,
        isSuccessRegistration: false
      }
    }
    default: {
      return state
    }
  }
};
export default registerReducer;
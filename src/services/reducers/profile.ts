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
} from "../actions/profile";
import type { TProfileActions } from "../actions/profile";
import type { TUser } from "../../utils/types";

type TInitialState = {
  user: TUser | null;
  isSuccessRequest: boolean;
  isError: boolean;
  isAuthChecked: boolean;
}
const initialState: TInitialState = {
  user: null,
  isSuccessRequest: false,
  isError: false,
  isAuthChecked: false
}

export const profileReducer = (state = initialState, action: TProfileActions): TInitialState => {
  switch (action.type) {
    case PATCH_PROFILE_REQUEST:
    case GET_PROFILE_REQUEST:
    case RESET_PROFILE: {
      return {
        ...initialState,
        isAuthChecked: state.isAuthChecked
      } 
    }
    case PATCH_PROFILE_SUCCESS:
    case GET_PROFILE_SUCCESS: {
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
    case AUTH_RESET: {
      return {
        ...state,
        isAuthChecked: false
      }
    }
    default: {
      return state
    }
  }
}
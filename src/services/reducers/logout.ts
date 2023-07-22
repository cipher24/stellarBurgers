import {
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST
} from "../actions/logout";
import type {TLogoutActions} from "../actions/logout";
type TInitialState = {
  isError: boolean;
}
const initialState: TInitialState = {
  isError: false
}

export const logoutReducer = (state = initialState, action: TLogoutActions): TInitialState => {
  switch (action.type) {
    case LOGOUT_REQUEST: {
      return initialState
    }
    case LOGOUT_SUCCESS: {
      return {
        isError: false
      }
    }
    case LOGOUT_ERROR: {
      return {
        isError: true,
      }
    }
    default: {
      return state
    }
  }
}
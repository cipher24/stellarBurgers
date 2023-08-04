import {
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  TLogoutActions
} from "../actions/logout";

type TInitialState = {
  isError: string | null;
}
export const initialState: TInitialState = {
  isError: null
}

export const logoutReducer = (state = initialState, action: TLogoutActions): TInitialState => {
  switch (action.type) {
    case LOGOUT_REQUEST: {
      return initialState
    }
    case LOGOUT_SUCCESS: {
      return {
        isError: null
      }
    }
    case LOGOUT_ERROR: {
      return {
        isError: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
export default logoutReducer;
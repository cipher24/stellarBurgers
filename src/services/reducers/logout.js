import {
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST
} from "../actions/logout";

const initialState = {
  isError: false
}

export const logoutReducer = (state = initialState, action) => {
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
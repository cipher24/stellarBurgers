import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  TLoginActions
} from "../actions/login";

type TInitialState = {
  isSuccessLogin: boolean;
  isError: string | null;
}
const initialState: TInitialState = {
  isSuccessLogin: false,
  isError: null
}

export const loginReducer = (state = initialState, action: TLoginActions): TInitialState => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return initialState
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isSuccessLogin: true,
        isError: null
      }
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isSuccessLogin: false,
        isError: action.payload
      }
    }
    default: {
      return state
    }
  }
};
export default loginReducer;
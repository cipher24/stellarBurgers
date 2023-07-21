import { TWSOrder } from '../../utils/types';
import { SHOW_ORDER_ERROR, SHOW_ORDER_REQUEST, SHOW_ORDER_SUCCESS, TShowOrderActions } from '../actions/show-order';
type TInitialState = {
  data: TDataOrder | null;
  isError: string;
}
const initialState = {
  data: null,
  isError: ''
}
type TOrderOwner = TWSOrder & {
  owner: string;
  __v: number
}
type TDataOrder = {
  success: boolean;
  orders: TOrderOwner[];
}
export const showOrderReducer = (state: TInitialState = initialState, action: TShowOrderActions): TInitialState => {
  switch (action.type) {
    case SHOW_ORDER_REQUEST: {
      return initialState
    }
    case SHOW_ORDER_SUCCESS: {
      return {
        ...state,
        data: action.payload
      }
    }
    case SHOW_ORDER_ERROR: {
      return {
        ...state,
        isError: action.payload
      }
    }
    default: {
      return state
    }
  }
}
import {
  POST_REQUEST,
  POST_ERROR,
  POST_SUCCESS,
  CLOSE_ORDER,
  TData
} from "../actions/order-details";
import type { TOrderActions } from "../actions/order-details";
import type { TAnswer } from "../actions/order-details";


type TInitialState = {
  orderNumber: number | null;
  answer: TData | null;
  isOrderError: boolean;
  isShowOrder: boolean;
}

const initialState: TInitialState = {
  orderNumber: null,
  answer: null,
  isOrderError: false,
  isShowOrder: false
}

export const orderDetailsReducer = (state = initialState, action: TOrderActions): TInitialState => {
  switch (action.type) {

    case POST_REQUEST: {
      return {
        ...initialState,
        isShowOrder: true,
      }
    }
    case POST_SUCCESS: {
      return {
        ...state,
        answer: action.payload,
        isShowOrder: true,
        isOrderError: false,
        orderNumber: action.payload.order.number
      }
    }
    case POST_ERROR: {
      return {
        ...initialState,
        isShowOrder: false,
        isOrderError: true
      }
    }
    case CLOSE_ORDER: {
      return {
        ...state,
        isShowOrder: false
      }
    }
    /* case LOGOUT_SUCCESS: {
      return {
        ...state,
        isShowOrder: false
      }
    } */
    default: {
      return state
    }
  }
}
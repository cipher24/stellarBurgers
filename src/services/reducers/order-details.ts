import {
  POST_REQUEST,
  POST_ERROR,
  POST_SUCCESS,
  CLOSE_ORDER,
  TData,
  TOrderActions
} from "../actions/order-details";


type TInitialState = {
  orderNumber: number | null;
  answer: TData | null;
  isOrderError: string | null;
  isShowOrder: boolean;
}

export const initialState: TInitialState = {
  orderNumber: null,
  answer: null,
  isOrderError: null,
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
        isOrderError: null,
        orderNumber: action.payload.order.number
      }
    }
    case POST_ERROR: {
      return {
        ...initialState,
        isShowOrder: false,
        isOrderError: action.payload
      }
    }
    case CLOSE_ORDER: {
      return {
        ...state,
        isShowOrder: false
      }
    }
    default: {
      return state
    }
  }
};
export default orderDetailsReducer;
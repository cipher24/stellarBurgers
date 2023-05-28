import { POST_REQUEST, POST_ERROR, POST_SUCCESS, CLOSE_ORDER } from "../actions/order-details"

const initialState = {
  orderNumber: null,
  answer: {},
  isOrderError: false,
  isShowOrder: false
}

export const orderDetailsReducer = (state=initialState, action) => {
  switch (action.type) {
    
    case POST_REQUEST: {
      return {
        ...state,
        isOrderError: false,
        isShowOrder: false
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
        isError: true
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
}
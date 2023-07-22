import { TAnswerData, TAnswerError } from '../../utils/types';
import { REQUEST_ORDER_ERROR, REQUEST_ORDER_REQUEST, REQUEST_ORDER_SUCCESS, TRequestOrderActions } from '../actions/request-order';

type TInitialState = {
  answerData: TAnswerData | null;
  isError: string | null;
}
const initialState:TInitialState = {
  answerData: null,
  isError: null
}

export const requestedOrderReducer = (state: TInitialState = initialState, action: TRequestOrderActions): TInitialState => {
  switch (action.type) {
    case REQUEST_ORDER_REQUEST: {
      return initialState
    }
    case REQUEST_ORDER_SUCCESS: {
      return {
        ...state,
        answerData: action.payload
      }
    }
    case REQUEST_ORDER_ERROR: {
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
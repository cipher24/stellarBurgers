import { TWSData, TWSOrder } from "../../utils/types";
import {
  FEED_WS_CONNECT,
  FEED_WS_DISCONNECT,
  WS_ON_ERROR,
  WS_ON_OPEN,
  WS_ON_MESSAGE,
  TFeedActions,
  HISTORY_WS_CONNECT,
  HISTORY_WS_DISCONNECT,
  THistoryActions,
} from "../actions/socket";

export type TInitialState = {
  status: string;
  isError: string;
  data: TWSData | null;
}
const initialState: TInitialState = {
  status: 'offline',
  isError: '',
  data: null
}

export const socketReducer = (state: TInitialState = initialState, action: TFeedActions | THistoryActions): TInitialState => {
  switch (action.type) {
    case FEED_WS_CONNECT: {
      return {
        ...state,
        status: 'connecting',
        isError: ''
      }
    }
    case FEED_WS_DISCONNECT: {
      return {
        ...state,
        status: 'disconnected',
        isError: ''
      }
    }
    case HISTORY_WS_CONNECT: {
      return {
        ...state,
        status: 'connecting',
        isError: ''
      }
    }
    case HISTORY_WS_DISCONNECT: {
      return {
        ...state,
        status: 'disconnected',
        isError: ''
      }
    }
    case WS_ON_OPEN: {
      return {
        ...state,
        status: 'connected',
        isError: ''
      }
    }
    case WS_ON_ERROR: {
      return {
        ...state,
        isError: action.payload
      }
    }
    case WS_ON_MESSAGE: {
      return {
        ...state,
        isError: '',
        data: action.payload
      }
    }
    default: {
      return state
    }
  }
}
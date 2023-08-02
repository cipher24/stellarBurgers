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
  WS_ON_CLOSE,
} from "../actions/socket";

export type TInitialState = {
  status: string;
  isError: string | null;
  data: TWSData | null;
}
const initialState: TInitialState = {
  status: 'disconnected',
  isError: null,
  data: null
}

export const socketReducer = (state: TInitialState = initialState, action: TFeedActions | THistoryActions): TInitialState => {
  switch (action.type) {
    case FEED_WS_CONNECT: {
      return {
        ...state,
        status: 'connecting',
        isError: null
      }
    }
    case FEED_WS_DISCONNECT: {
      return {
        ...state,
        status: 'disconnecting',
        isError: null
      }
    }
    case HISTORY_WS_CONNECT: {
      return {
        ...state,
        status: 'connecting',
        isError: null
      }
    }
    case HISTORY_WS_DISCONNECT: {
      return {
        ...state,
        status: 'disconnecting',
        isError: null
      }
    }
    case WS_ON_OPEN: {
      return {
        ...state,
        status: 'connected',
        isError: null
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
        isError: null,
        data: action.payload
      }
    }
    case WS_ON_CLOSE: {
      return {
        ...initialState
      }
    }
    default: {
      return state
    }
  }
};
export default socketReducer;
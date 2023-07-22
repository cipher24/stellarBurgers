import type { Middleware} from 'redux';
import { TRootState } from '../../utils/types';
import {
  FEED_WS_CONNECT,
  FEED_WS_DISCONNECT,
  WS_ON_OPEN,
  WS_ON_ERROR,
  WS_ON_MESSAGE,
  WS_ON_CLOSE,
  HISTORY_WS_CONNECT,
  HISTORY_WS_DISCONNECT,
} from '../actions/socket';

export type TFeedWsActionTypes = {
  wsConnect: typeof FEED_WS_CONNECT,
  wsDisconnect: typeof FEED_WS_DISCONNECT,
  onOpen: typeof WS_ON_OPEN,
  onError: typeof WS_ON_ERROR,
  onMessage: typeof WS_ON_MESSAGE
  onClose: typeof WS_ON_CLOSE
}
export type THistoryWsActionTypes = {
  wsConnect: typeof HISTORY_WS_CONNECT,
  wsDisconnect: typeof HISTORY_WS_DISCONNECT,
  onOpen: typeof WS_ON_OPEN,
  onError: typeof WS_ON_ERROR,
  onMessage: typeof WS_ON_MESSAGE
  onClose: typeof WS_ON_CLOSE
}

export const socketMiddleware = (wsActions: TFeedWsActionTypes | THistoryWsActionTypes): Middleware<{}, TRootState> => {
  return ((store) => {
    let socket: WebSocket | null = null;

    return next => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsConnect, wsDisconnect, onOpen, onError, onMessage, onClose } = wsActions;
      if ((type === wsConnect)&&(socket?.url !== action.payload)) {
        socket = new WebSocket(action.payload);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen });
        };
        socket.onerror = event => {
          dispatch({ type: onError, payload: 'error' });
        };
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);

          dispatch({type: onMessage, payload: parsedData});
        };
        socket.onclose = event => {
          dispatch({type: onClose})
        }
        if (type === wsDisconnect) {
          socket.close(1000, 'unmount component with websocket');
          socket = null;
        }
      }
      next(action);
    }
  }) as Middleware
}





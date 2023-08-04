import reducer from './socket';
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
import { MockWebSocketList } from '../../utils/mock-data';
import { initialState } from './socket';

const stateConnected = {
  ...initialState,
  status: 'connected'
}

const stateConnecting = {
  ...initialState,
  status: 'connecting'
}
const stateDisonnecting = {
  ...initialState,
  status: 'disconnecting'
}

/* const stateStatus = (status: string) => {
  return {
    ...initialState, 
    status
  }
} */

describe('test socket reducer', () => {
  it('should return the initial state History', () => {
    expect(reducer(undefined, {} as THistoryActions)).toEqual(initialState)
  });
  it('should return the initial state Feed', () => {
    expect(reducer(undefined, {} as TFeedActions)).toEqual(initialState)
  });
  it('should handle FEED_WS_CONNECT', () => {
    expect(reducer({
      ...initialState,
      isError: 'Обрыв соединения'
    }, {
      type: FEED_WS_CONNECT,
      payload: 'wss://google.com'
    })).toEqual(stateConnecting)
  });
  it('should handle FEED_WS_DISCONNECT', () => {
    expect(reducer(stateConnected, {
      type: FEED_WS_DISCONNECT
    })).toEqual(stateDisonnecting)
  });
  it('should handle HISTORY_WS_CONNECT', () => {
    expect(reducer(initialState, {
      type: HISTORY_WS_CONNECT,
      payload: 'wss://google.com'
    })).toEqual(stateConnecting)
  });
  it('should handle HISTORY_WS_DISCONNECT', () => {
    expect(reducer(stateConnected, {
      type: HISTORY_WS_DISCONNECT
    })).toEqual(stateDisonnecting)
  });
  it('should handle WS_ON_CLOSE', () => {
    expect(reducer(stateDisonnecting, {
      type: WS_ON_CLOSE
    })).toEqual(initialState)
  });
  it('should handle WS_ON_OPEN', () => {
    expect(reducer(stateConnecting, {
      type: WS_ON_OPEN
    })).toEqual(stateConnected)
  });
  it('should handle WS_ON_ERROR', () => {
    expect(reducer(stateConnected, {
      type: WS_ON_ERROR,
      payload: 'Ошибка при передаче сообщения'
    })).toEqual({
      ...stateConnected,
      isError: 'Ошибка при передаче сообщения'
    })
  });
  it('should handle WS_ON_MESSAGE', () => {
    expect(reducer(stateConnected, {
      type: WS_ON_MESSAGE,
      payload: MockWebSocketList
    })).toEqual({
      ...stateConnected,
      data: MockWebSocketList
    });
  });
});
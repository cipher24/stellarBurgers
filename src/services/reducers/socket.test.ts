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

describe('test socket reducer', () => {
  it('should return the initial state History', () => {
    expect(reducer(undefined, {} as THistoryActions)).toEqual({
      status: 'disconnected',
      isError: null,
      data: null
    })
  });
  it('should return the initial state Feed', () => {
    expect(reducer(undefined, {} as TFeedActions)).toEqual({
      status: 'disconnected',
      isError: null,
      data: null
    })
  });
  it('should handle FEED_WS_CONNECT', () => {
    expect(reducer({
      status: 'disconnected',
      isError: 'Обрыв соединения',
      data: null
    }, {
      type: FEED_WS_CONNECT,
      payload: 'wss://google.com'
    })).toEqual({
      data: null,
      status: 'connecting',
      isError: null
    })
  });
  it('should handle FEED_WS_DISCONNECT', () => {
    expect(reducer({
      data: null,
      status: 'connected',
      isError: null
    }, {
      type: FEED_WS_DISCONNECT
    })).toEqual({
      data: null,
      status: 'disconnecting',
      isError: null
    })
  });
  it('should handle HISTORY_WS_CONNECT', () => {
    expect(reducer({
      status: 'disconnected',
      isError: 'Обрыв соединения',
      data: null
    }, {
      type: HISTORY_WS_CONNECT,
      payload: 'wss://google.com'
    })).toEqual({
      data: null,
      status: 'connecting',
      isError: null
    })
  });
  it('should handle HISTORY_WS_DISCONNECT', () => {
    expect(reducer({
      data: null,
      status: 'connected',
      isError: null
    }, {
      type: HISTORY_WS_DISCONNECT
    })).toEqual({
      data: null,
      status: 'disconnecting',
      isError: null
    })
  });
  it('should handle WS_ON_CLOSE', () => {
    expect(reducer({
      data: null,
      status: 'disconnecting',
      isError: null
    }, {
      type: WS_ON_CLOSE
    })).toEqual({
      data: null,
      status: 'disconnected',
      isError: null
    })
  });
  it('should handle WS_ON_OPEN', () => {
    expect(reducer({
      data: null,
      status: 'connecting',
      isError: null
    }, {
      type: WS_ON_OPEN
    })).toEqual({
      data: null,
      status: 'connected',
      isError: null
    })
  });
  it('should handle WS_ON_ERROR', () => {
    expect(reducer({
      data: null,
      status: 'connected',
      isError: null
    }, {
      type: WS_ON_ERROR,
      payload: 'Обрыв соединения'
    })).toEqual({
      data: null,
      status: 'connected',
      isError: 'Обрыв соединения'
    })
  });
  it('should handle WS_ON_MESSAGE', () => {
    expect(reducer({
      data: null,
      status: 'connected',
      isError: null
    }, {
      type: WS_ON_MESSAGE,
      payload: MockWebSocketList
    })).toEqual({
      data: MockWebSocketList,
      status: 'connected',
      isError: null
    })
  });
});
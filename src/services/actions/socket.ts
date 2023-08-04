import { TWSData } from "../../utils/types";

export const FEED_WS_CONNECT: 'FEED_WS_CONNECT' = 'FEED_WS_CONNECT';
export const FEED_WS_DISCONNECT: 'FEED_WS_DISCONNECT' = 'FEED_WS_DISCONNECT';

export const HISTORY_WS_CONNECT: 'HISTORY_WS_CONNECT' = 'HISTORY_WS_CONNECT';
export const HISTORY_WS_DISCONNECT: 'HISTORY_WS_DISCONNECT' = 'HISTORY_WS_DISCONNECT';

export const WS_ON_OPEN: 'WS_ON_OPEN' = 'WS_ON_OPEN';
export const WS_ON_CLOSE: 'WS_ON_CLOSE' = 'WS_ON_CLOSE';
export const WS_ON_ERROR: 'WS_ON_ERROR' = 'WS_ON_ERROR';
export const WS_ON_MESSAGE: 'WS_ON_MESSAGE' = 'WS_ON_MESSAGE';



export interface IFeedConnectAction {
  readonly type: typeof FEED_WS_CONNECT;
  readonly payload: string;
}
export interface IFeedDisconnectAction {
  readonly type: typeof FEED_WS_DISCONNECT;
}
export interface IWsOnOpenAction {
  readonly type: typeof WS_ON_OPEN;
}

export interface IWsOnErrorAction {
  readonly type: typeof WS_ON_ERROR;
  readonly payload: string;
}
export interface IWsOnMessageAction {
  readonly type: typeof WS_ON_MESSAGE;
  readonly payload: TWSData;
}
export interface IWsOnCloseAction {
  readonly type: typeof WS_ON_CLOSE;
}


export const feedWSConnect = (url: string): IFeedConnectAction => ({
  type: FEED_WS_CONNECT,
  payload: url
})
export const feedWSDisconnect = (): IFeedDisconnectAction => ({
  type: FEED_WS_DISCONNECT,
})

export const onMessage = (data: TWSData): IWsOnMessageAction => ({
  type: WS_ON_MESSAGE,
  payload: data
})
export const onError = (error: string): IWsOnErrorAction => ({
  type: WS_ON_ERROR,
  payload: error
})

export type TFeedActions =
  IFeedConnectAction
  | IFeedDisconnectAction
  | IWsOnOpenAction
  | IWsOnMessageAction
  | IWsOnCloseAction
  | IWsOnErrorAction;


export interface IHistoryConnectAction {
  readonly type: typeof HISTORY_WS_CONNECT;
  readonly payload: string;
}
export interface IHistoryDisconnectAction {
  readonly type: typeof HISTORY_WS_DISCONNECT;
}

export type THistoryActions =
  IHistoryConnectAction
  | IHistoryDisconnectAction
  | IWsOnOpenAction
  | IWsOnMessageAction
  | IWsOnCloseAction
  | IWsOnErrorAction;

export const historyWSConnect = (url: string): IHistoryConnectAction => ({
  type: HISTORY_WS_CONNECT,
  payload: url
})
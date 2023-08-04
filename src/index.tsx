import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/app/app";
import reportWebVitals from './reportWebVitals';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './services/reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { socketMiddleware } from './services/middleware/socket-middleware';
import {
  FEED_WS_CONNECT,
  FEED_WS_DISCONNECT,
  WS_ON_OPEN,
  WS_ON_ERROR,
  WS_ON_MESSAGE,
  WS_ON_CLOSE,
  HISTORY_WS_DISCONNECT,
  HISTORY_WS_CONNECT,
} from './services/actions/socket';
import React from 'react';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const feedMiddleware = socketMiddleware({
  wsConnect: FEED_WS_CONNECT,
  wsDisconnect: FEED_WS_DISCONNECT,
  onOpen: WS_ON_OPEN,
  onError: WS_ON_ERROR,
  onMessage: WS_ON_MESSAGE,
  onClose: WS_ON_CLOSE
})
const ordersMiddleware = socketMiddleware({
  wsConnect: HISTORY_WS_CONNECT,
  wsDisconnect: HISTORY_WS_DISCONNECT,
  onOpen: WS_ON_OPEN,
  onError: WS_ON_ERROR,
  onMessage: WS_ON_MESSAGE,
  onClose: WS_ON_CLOSE
})

const enhancer = composeEnhancers(applyMiddleware(thunk, feedMiddleware, ordersMiddleware));
export const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<>
  {/* <React.StrictMode> */}
  {/* <BrowserRouter */}
  <HashRouter basename='/'>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
  {/* </BrowserRouter> */}
  {/* </React.StrictMode> */}
</>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

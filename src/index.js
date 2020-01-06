import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { App } from "./react";
import configureStore, { history } from "./configureStore";
import * as serviceWorker from './serviceWorker';
import './styles/index.css';


const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
  );
  
  serviceWorker.unregister();
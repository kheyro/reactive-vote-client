import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import io from 'socket.io-client';
import { setState } from './actions';
import configureStore from '../config/store';
import history from '../config/history';

import App from './App';

const socket = io(`${location.protocol}//${location.hostname}:5000`);
socket.on('state', state => store.dispatch(setState(state)));

const store = configureStore(undefined, socket);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

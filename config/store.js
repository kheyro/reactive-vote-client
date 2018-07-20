import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import remoteAction from './middleware';
import rootReducer from '../src/reducers/index';

export default function configureStore(preloadedState, socket) {
  const middlewares = [thunk, remoteAction(socket)];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers =
    (process.env.NODE_ENV !== 'production' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...enhancers)) ||
    compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}

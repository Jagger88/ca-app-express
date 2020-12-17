// store.js
import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

// put logger into middleware array
// using this so that we can add multiple middleware libraries into middleware and then send 
// to applyMiddleware

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default {store, persistStore};
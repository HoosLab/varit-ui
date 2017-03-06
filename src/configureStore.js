import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import varitApp from './reducers';

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    varitApp,
    // persistedState, // It can be skipped.
    // applyMiddleware(createLogger(), promise)
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
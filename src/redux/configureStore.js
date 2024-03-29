import { applyMiddleware, compose, createStore } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {responsiveStoreEnhancer} from 'redux-responsive';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore (initialState = {}, history) {
  // Compose final middleware and use devtools in debug environment
  let middleware = compose(responsiveStoreEnhancer, applyMiddleware(promise, thunk, routerMiddleware(history)));

  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : require('containers/DevTools').default.instrument();
    middleware = compose(middleware, devTools);
  }

  // Create final store and subscribe router in debug env ie. for devtools
  const store = middleware(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default;

      store.replaceReducer(nextRootReducer);
    });
  }
  
  return store;
}

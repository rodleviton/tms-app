import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './modules/counter';
import project from './modules/project';

export default combineReducers({
  project,
  counter,
  router
});

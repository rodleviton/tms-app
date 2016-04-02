import { combineReducers } from 'redux';
import {responsiveStateReducer} from 'redux-responsive';
import { routerReducer as router } from 'react-router-redux';
import counter from './modules/counter';
import project from './modules/project';
import comments from './modules/comments';
import layout from './modules/layout';

export default combineReducers({
  browser: responsiveStateReducer,
  project,
  comments,
  layout,
  counter,
  router
});

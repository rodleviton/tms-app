import axios from 'axios';

/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
const BASE_URL = 'http://127.0.0.1:3030';

// ------------------------------------
// Actions
// ------------------------------------
// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.
export function fetchComments(id): Action {
  const request = axios.get(`${BASE_URL}/comments/${id}`);

  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}

export const actions = {
  fetchComments
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_COMMENTS]: (state: mixed, action: { payload: mixed }): mixed => {
    return {
      ...state,
      data: action.payload.data
    };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const INITIAL_STATE = { data: {} };

export default function commentsReducer(state: mixed = INITIAL_STATE, action: Action): mixed {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}


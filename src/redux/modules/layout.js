import _ from 'lodash';

/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_LAYOUT = 'UPDATE_LAYOUT';

// ------------------------------------
// Actions
// ------------------------------------
// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.
export function updateLayout(el, attr): Action {
  const layout = {
    [el]: attr
  };

  return {
    type: UPDATE_LAYOUT,
    payload: layout
  };
}

export const actions = {
  updateLayout
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_LAYOUT]: (state: mixed, action: {payload: mixed}): mixed => {
    return _.merge(state, action.payload);
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const INITIAL_STATE = {
  header: { height: 0 },
  commentsHeader: { height: 0 }
};

// const INITIAL_STATE = {};

export default function layoutReducer(state: mixed = INITIAL_STATE, action: Action): mixed {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

export const initialState = {
  strings: [],
  loading: false,
  error: true,
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_STRINGS:
        return state.set('loading', true).set('error', false);
      case LOAD_STRINGS_SUCCESS:
        return state
          .set('loading', false)
          .set('error', false)
          .set('strings', action.strings);
      case LOAD_STRINGS_ERROR:
        return state.set('loading', false).set('error', action.error);
      default:
        return state;
      // break;
    }
  });

export default mainPageReducer;

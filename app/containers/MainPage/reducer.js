/*
 *
 * MainPage reducer
 *
 */
// import produce from 'immer';
import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

import {
  POST_STRING,
  POST_STRING_SUCCESS,
  POST_STRING_ERROR,
} from '../AddPage/constants';

export const initialState = {
  strings: [],
  loading: false,
  error: true,
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STRINGS:
      return { ...state, loading: true, error: false };
    case LOAD_STRINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        strings: action.strings,
      };
    case LOAD_STRINGS_ERROR:
      return { ...state, loading: false, error: action.error };
    case POST_STRING:
      return { ...state, loading: true, error: false };
    case POST_STRING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        strings: action.strings,
      };
    case POST_STRING_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default mainPageReducer;

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
    default:
      return state;
  }
};

export default mainPageReducer;

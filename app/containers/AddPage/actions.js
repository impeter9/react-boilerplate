/*
 *
 * AddPage actions
 *
 */

import {
  POST_STRING,
  POST_STRING_SUCCESS,
  POST_STRING_ERROR,
} from './constants';

export function postString(string) {
  return {
    type: POST_STRING,
    string,
  };
}

export function postStringSuccess(strings) {
  return {
    type: POST_STRING_SUCCESS,
    strings,
  };
}

export function postStringError(error) {
  return {
    type: POST_STRING_ERROR,
    error,
  };
}

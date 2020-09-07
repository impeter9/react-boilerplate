// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { loadStringsSuccess, loadStringsError } from './actions';
import { LOAD_STRINGS } from './constants';

export function* loadStrings() {
  // todo: call the api
  // todo: set result in action
  const requestURL = `http://localhost:3000/api`;

  try {
    // Call our request helper (see 'utils/request')
    const strings = yield call(request, requestURL);
    yield put(loadStringsSuccess(strings));
  } catch (err) {
    yield put(loadStringsError(err));
  }
}

// Individual exports for testing
export default function* mainPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_STRINGS, loadStrings);
}

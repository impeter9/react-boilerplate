/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { call } from 'redux-saga/effects';
import request from 'utils/request';
import { loadStrings } from '../saga';

const generator = loadStrings();

describe('mainPageSaga Saga', () => {
  it('Expect to have unit tests specified', () => {
    expect(generator.next().value).toEqual(
      call(request, `http://localhost:3000/api`),
    );
  });
});

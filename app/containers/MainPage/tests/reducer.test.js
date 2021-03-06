// import produce from 'immer';
import mainPageReducer from '../reducer';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('mainPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      strings: [],
      loading: false,
      error: true,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(mainPageReducer(undefined, {})).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});

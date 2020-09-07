import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.mainPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () =>
  createSelector(
    selectMainPageDomain,
    subState => subState,
  );

const makeStringsSelector = () =>
  createSelector(
    selectMainPageDomain,
    subState => subState.strings,
  );

export default makeSelectMainPage;
export { selectMainPageDomain, makeStringsSelector };

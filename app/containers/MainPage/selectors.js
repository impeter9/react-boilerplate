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
    substate => substate,
  );

const makeStringsSelector = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.strings,
  );

export default makeSelectMainPage;
export { selectMainPageDomain, makeStringsSelector };

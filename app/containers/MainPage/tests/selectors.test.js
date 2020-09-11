import { selectMainPageDomain } from '../selectors';

describe('selectMainPageDomain', () => {
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
    expect(selectMainPageDomain(state)).toEqual(expectedResult);
  });
});

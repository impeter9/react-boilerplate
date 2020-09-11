import { loadStrings } from '../actions';
import { LOAD_STRINGS } from '../constants';

describe('MainPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: LOAD_STRINGS,
      };
      expect(loadStrings()).toEqual(expected);
    });
  });
});

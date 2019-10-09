import { setHall } from './cinema';
import { LOAD_HALL } from './constants';

import hall from '../api/hall.json';

it('creates an action to set the hall', () => {

    const expectedAction = { type: LOAD_HALL, payload: hall };

    expect(setHall()).toEqual(expectedAction);
});
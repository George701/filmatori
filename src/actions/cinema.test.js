import { setHall, reservePlace, occupyPlace, setEmptyPlace } from './cinema';
import { LOAD_HALL, RESERVE_PLACE, OCCUPY_PLACE, SET_PLACE_EMPTY } from './constants';

import hall from '../api/hall.json';

const cinema = {
    hall: {
        ...hall
    }
};

const data = { p_id: 'PT01', r_id: 'RT01' }

it('creates an action to set the hall', () => {

    const expectedAction = { type: LOAD_HALL, payload: cinema.hall };

    expect(setHall()).toEqual(expectedAction);
});

it('creates an action to reserve specific place', () => {
    const expectedAction = { type: RESERVE_PLACE, payload: data };
    expect(reservePlace(data.p_id, data.r_id)).toEqual(expectedAction);
});

it('creates an action to occupy specific place', () => {

    const expectedAction = { type: OCCUPY_PLACE, payload: data };
    expect(occupyPlace(data.p_id, data.r_id)).toEqual(expectedAction);
});

it('creates an action to set free specific place', () => {
    const expectedAction = { type: SET_PLACE_EMPTY, payload: data };
    expect(setEmptyPlace(data.p_id, data.r_id)).toEqual(expectedAction);
});
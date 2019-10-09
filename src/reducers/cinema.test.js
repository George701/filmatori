import { LOAD_HALL } from '../actions/constants';
import cinemaReducer from './cinemaReducer';
import hallAPI from '../api/hall.json'

describe('cinemaReducer', () => {
    describe('when setting a hall', () => {
        it('sets a hall', () => {
            const initialState = {
                loading: true,
                hall: {}
            };
            const expectedAction = {
                loading: false, hall: {}
            };
            expect(cinemaReducer(initialState, { type: LOAD_HALL, hall: {}, loading: false })).toEqual(expectedAction);
        });
    });
});
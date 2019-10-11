import { LOAD_HALL, RESERVE_PLACE, OCCUPY_PLACE, SET_PLACE_EMPTY } from '../actions/constants';
import cinemaReducer from './cinemaReducer';
import hall from '../api/hall.json'

const initialState = {
    loading: true,
    hall: {
        hallName: '',
        rows: []
    }
}

const cinema = {
    loading: false,
    hall: {
        hallName: 'Test Hall',
        rows: [
            {
                _id: "RT01",
                rowNumber: 1,
                places: [
                    {
                        _id: "PT01",
                        placeNumber: 1,
                        isReserved: false,
                        isOccupied: false
                    }
                ]
            }
        ]
    }
};

describe('cinemaReducer', () => {

    describe('when setting a hall', () => {

        it('sets a hall', () => {
            const expectedAction = { loading: false, hall: { ...hall } };
            expect(cinemaReducer(initialState, { type: LOAD_HALL, payload: { ...hall } })).toEqual(expectedAction);
        });
    });

    describe('when reserving a spot', () => {

        it('sets a place to be reserved', () => {
            const payload = { p_id: cinema.hall.rows[0].places[0]._id, r_id: cinema.hall.rows[0]._id };
            const reserved = cinema;
            reserved.hall.rows[0].places[0].isReserved = true;
            const expectedAction = { ...reserved };
            expect(cinemaReducer(cinema, { type: RESERVE_PLACE, payload })).toEqual(expectedAction);
        });
    });

    describe('when buying a spot', () => {

        it('sets a place to be occupied', () => {
            const payload = { p_id: cinema.hall.rows[0].places[0]._id, r_id: cinema.hall.rows[0]._id };
            const occupied = cinema;
            occupied.hall.rows[0].places[0].isReserved = false;
            occupied.hall.rows[0].places[0].isOccupied = true;
            const expectedAction = { ...occupied };
            expect(cinemaReducer(cinema, { type: OCCUPY_PLACE, payload })).toEqual(expectedAction);
        });
    });

    describe('when unsetting a spot', () => {

        it('sets a place to be free', () => {
            const payload = { p_id: cinema.hall.rows[0].places[0]._id, r_id: cinema.hall.rows[0]._id };
            const free = cinema;
            free.hall.rows[0].places[0].isReserved = false;
            free.hall.rows[0].places[0].isOccupied = false;
            const expectedAction = { ...free };
            expect(cinemaReducer(cinema, { type: SET_PLACE_EMPTY, payload })).toEqual(expectedAction);
        });
    });
});
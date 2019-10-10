import { LOAD_HALL, RESERVE_PLACE, OCCUPY_PLACE, SET_PLACE_EMPTY } from './constants';
import hallAPI from '../api/hall.json';

// Upload hall 
export const setHall = () => {
    try {
        // immitating request
        const res = {
            status: 200,
            data: { ...hallAPI }
        };

        return ({
            type: LOAD_HALL,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
        alert('Error occured while loading hall!');
    }
};

// book seat
export const reservePlace = (pl_id, row_id) => {
    try {
        // immitating request
        const res = {
            status: 200,
            data: { p_id: pl_id, r_id: row_id }
        };
        return ({
            type: RESERVE_PLACE,
            payload: res.data
        });

    } catch (err) {
        console.error(err);
        alert('Error occured while reserving the place!');
    }

};

// buy seat
export const occupyPlace = (pl_id, row_id) => {
    try {
        // immitating request
        const res = {
            status: 200,
            data: { p_id: pl_id, r_id: row_id }
        };
        return ({
            type: OCCUPY_PLACE,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
        alert('Error occured while selling the place!');
    };
};

// free seat
export const setEmptyPlace = (pl_id, row_id) => {
    try {
        // immitating request
        const res = {
            status: 200,
            data: { p_id: pl_id, r_id: row_id }
        };

        return ({
            type: SET_PLACE_EMPTY,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
        alert('Error occured while selling the place!');
    };
};
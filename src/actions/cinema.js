import { LOAD_HALL, RESERVE_PLACE } from './constants';
import hallAPI from '../api/hall.json';

export const setHall = () => {

    // imitating request
    const res = {
        status: 200,
        data: { ...hallAPI }
    };

    return ({
        type: LOAD_HALL,
        payload: res.data
    });
};

export const reservePlace = (id, row_id) => {
    const res = {
        status: 200,
        data: { p_id: id, r_id: row_id }
    };

    return ({
        type: RESERVE_PLACE,
        payload: res.data
    });
};
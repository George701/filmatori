import { LOAD_HALL } from './constants';
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
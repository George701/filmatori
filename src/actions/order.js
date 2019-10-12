import { ADD_PLACE_TO_ORDER, REMOVE_PLACE_FROM_ORDER, CLEAN_ORDER_LIST } from './constants';

export const addPlaceToOrder = (rowNumber, placeNumber, r_id, p_id, price) => {
    try {
        // immitating request
        const res = {
            status: 200,
            data: { rowNumber, placeNumber, r_id, p_id, price }
        };

        return ({
            type: ADD_PLACE_TO_ORDER,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
        alert('Error occured while adding a place to order list!');
    }
};

export const removePlaceFromOrder = (rowNumber, placeNumber, r_id, p_id, price) => {
    try {
        // immitating request
        const res = {
            status: 200,
            data: { rowNumber, placeNumber, r_id, p_id, price }
        };

        return ({
            type: REMOVE_PLACE_FROM_ORDER,
            payload: res.data
        });
    } catch (err) {
        console.error(err);
        alert('Error occured while removing the place from order list');
    }
}

export const cleanOrderList = () => {
    try {
        // Request might take place
        return ({
            type: CLEAN_ORDER_LIST
        });
    } catch (err) {
        console.error(err);
        alert('Error occured while removing the place from order list');
    }
}
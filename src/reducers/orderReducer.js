import { ADD_PLACE_TO_ORDER, REMOVE_PLACE_FROM_ORDER, CLEAN_ORDER_LIST } from '../actions/constants';

const initialState = {
    orderPlaces: [],
    totalPrice: 0
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_PLACE_TO_ORDER:
            return {
                ...state,
                orderPlaces: [
                    ...state.orderPlaces,
                    {
                        rowId: payload.r_id,
                        placeId: payload.p_id,
                        rowNumber: payload.rowNumber,
                        placeNumber: payload.placeNumber
                    }
                ],
                totalPrice: parseFloat((state.totalPrice + parseFloat(payload.price)).toFixed(2))
            };
        case REMOVE_PLACE_FROM_ORDER:
            return {
                ...state,
                orderPlaces:
                    state.orderPlaces.filter(orderPlace => (
                        orderPlace.rowId !== payload.r_id
                            ? { ...orderPlace } :
                            orderPlace.placeId !== payload.p_id && { ...orderPlace }
                    )),
                totalPrice: parseFloat((state.totalPrice - parseFloat(payload.price)).toFixed(2))
            };
        case CLEAN_ORDER_LIST:
            return {
                ...state,
                orderPlaces: [],
                totalPrice: 0
            };
        default:
            return state;
    }
}
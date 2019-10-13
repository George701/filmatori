import { ADD_PLACE_TO_ORDER, REMOVE_PLACE_FROM_ORDER, CLEAN_ORDER_LIST } from '../actions/constants';
import orderReducer from './orderReducer';
import { orderInitialState, orderPayload } from '../testData/values';

describe('orderReducer', () => {
    it('adds a place to order state', () => {
        const payload = {
            orderPlaces: [
                {
                    rowId: orderPayload.r_id,
                    placeId: orderPayload.p_id,
                    rowNumber: orderPayload.rowNumber,
                    placeNumber: orderPayload.placeNumber
                }
            ],
            totalPrice: parseFloat(orderPayload.price)
        }

        const expectedAction = {
            ...payload
        };

        expect(orderReducer(orderInitialState, { type: ADD_PLACE_TO_ORDER, payload: { ...orderPayload } })).toEqual(expectedAction)
    });

    it('removes a place from order state', () => {
        const prevState = orderReducer(orderInitialState, { type: ADD_PLACE_TO_ORDER, payload: { ...orderPayload } });

        expect(orderReducer(prevState, { type: REMOVE_PLACE_FROM_ORDER, payload: { ...orderPayload } })).toEqual({ ...orderInitialState })
    });

    it('clears order state', () => {
        const prevState = orderReducer(orderInitialState, { type: ADD_PLACE_TO_ORDER, payload: { ...orderPayload } });
        expect(orderReducer(prevState, { type: CLEAN_ORDER_LIST })).toEqual({ ...orderInitialState });
    })
});
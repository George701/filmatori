import { addPlaceToOrder, removePlaceFromOrder, cleanOrderList } from './order';
import { ADD_PLACE_TO_ORDER, REMOVE_PLACE_FROM_ORDER, CLEAN_ORDER_LIST } from './constants';
import { orderPayload } from '../testData/values'

const payload = {
    rowNumber: orderPayload.rowNumber,
    placeNumber: orderPayload.placeNumber,
    r_id: orderPayload.r_id,
    p_id: orderPayload.p_id,
    price: orderPayload.price
}

it('creates an action to add place info to order state', () => {

    const expectedAction = { type: ADD_PLACE_TO_ORDER, payload };

    expect(addPlaceToOrder(orderPayload.rowNumber, orderPayload.placeNumber, orderPayload.r_id, orderPayload.p_id, orderPayload.price)).toEqual(expectedAction);
});

it('creates an action to remove place info to order state', () => {
    const expectedAction = { type: REMOVE_PLACE_FROM_ORDER, payload };
    expect(removePlaceFromOrder(orderPayload.rowNumber, orderPayload.placeNumber, orderPayload.r_id, orderPayload.p_id, orderPayload.price)).toEqual(expectedAction);
});

it('creates an action to remove place info to order state', () => {
    const expectedAction = { type: CLEAN_ORDER_LIST };
    expect(cleanOrderList()).toEqual(expectedAction);
});
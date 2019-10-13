import React from 'react';
import { shallow } from '../../enzyme';
import { OrderInfo } from './OrderInfo';
import { orderInfoMiscPositive, orderInfoMiscNegative } from '../../testData/values';

describe('OrderInfo', () => {
    const cleanOrderList = jest.fn();
    const occupyPlaces = jest.fn();

    const propsPositive = {
        cleanOrderList,
        occupyPlaces,
        order: orderInfoMiscPositive
    }

    const orderInfo = shallow(<OrderInfo {...propsPositive} />);

    it('renders properly', () => {
        expect(orderInfo).toMatchSnapshot();
    });

    it('displays correct amount of seats', () => {
        expect(parseInt(orderInfo.find('.order-places').text(), 10)).toEqual(propsPositive.order.orderPlaces.length);
    });

    it('displays correct price', () => {
        expect(orderInfo.find('.order-price').text()).toEqual(` ${propsPositive.order.totalPrice}$`);
    });

    it('displays active button', () => {
        expect(orderInfo.find('.order-btn-buy').exists()).toBe(true);
    });

    describe('when clicking the button', () => {
        beforeEach(() => {
            orderInfo.find('.order-btn-buy').simulate('click');
        });

        // it('uses a function to record booked seats', () => {
        //     expect(occupyPlaces).toHaveBeenCalledTimes(1);
        // });
    });

    describe('after clicking button', () => {
        const propsNagative = {
            cleanOrderList,
            occupyPlaces,
            order: orderInfoMiscNegative
        }

        const orderInfoAfter = shallow(<OrderInfo {...propsNagative} />);

        it('displays correct amount of seats', () => {
            expect(parseInt(orderInfoAfter.find('.order-places').text(), 10)).toEqual(0);
        });

        it('displays correct price', () => {
            expect(orderInfoAfter.find('.order-price').text()).toEqual(` ${0}$`);
        });

        it('does not display active button', () => {
            expect(orderInfoAfter.find('.order-btn-buy').exists()).toBe(false);
        });

        it('displays disabled button', () => {
            expect(orderInfoAfter.find('.btn-disabled').exists()).toBe(true);
        });
    });
});

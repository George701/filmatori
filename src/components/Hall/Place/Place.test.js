import React from 'react';
import { shallow, mount } from '../../../enzyme';
import { Place } from './index';
import { placeProps } from '../../../testData/values'

describe('Place', () => {

    const reservePlace = jest.fn();
    const addPlaceToOrder = jest.fn();
    const setEmptyPlace = jest.fn();
    const removePlaceFromOrder = jest.fn();

    const props = {
        ...placeProps,
        reservePlace,
        addPlaceToOrder,
        setEmptyPlace,
        removePlaceFromOrder
    };

    let place = shallow(<Place {...props} />);

    it('renders properly', () => {
        expect(place).toMatchSnapshot();
    });

    it('displays place and two empty spaces', () => {
        expect(place.find('.place-body').length).toEqual(3);
    });

    it('displays a chair', () => {
        expect(place.find('.place-unit').hasClass('place-chair')).toBe(true);
    });

    it('displays an empty seat', () => {
        expect(place.find('.place-unit').hasClass('place-empty')).toBe(true);
    });

    it('displays proper number of seat', () => {
        expect(parseInt((place.find('.place-unit').text()).charAt(0), 10)).toEqual(props.place.placeNumber);
    });

    it('displays tooltip', () => {
        expect(place.find('.tooltiptext').exists()).toBe(true);
    });

    describe('when reserving an empty spot', () => {
        beforeEach(() => {
            props.place.isReserved = true;
            place = mount(<Place {...props} />);
        });

        it('displays seat is reserved', () => {
            expect(place.find('.place-unit').hasClass('place-reserved')).toBe(true);
        });

        describe('and when buying a reserved spot', () => {
            beforeEach(() => {
                props.place.isReserved = false;
                props.place.isOccupied = true;
                place = mount(<Place {...props} />);
            });

            it('displays seat is reserved', () => {
                expect(place.find('.place-unit').hasClass('place-sold')).toBe(true);
            });
        });
    });
});
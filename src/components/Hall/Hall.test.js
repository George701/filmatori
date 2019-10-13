import React from 'react';
import { shallow } from '../../enzyme';
import { Hall } from './index';
import { propsArrived, propsPending } from '../../testData/values'

describe('Hall', () => {
    const setHall = jest.fn();
    const propsOne = {
        ...propsArrived,
        setHall
    };

    const propsTwo = {
        ...propsPending,
        setHall
    }

    const hall = shallow(<Hall {...propsOne} />);
    const hallLoading = shallow(<Hall {...propsTwo} />);

    describe('when waiting for props', () => {

        it('renders properly', () => {
            expect(hallLoading).toMatchSnapshot();
        });

        it('displays Loader', () => {
            // issue with rendering components from outside...
            expect(hallLoading.find('_default').exists()).toBe(true);
        })
    });

    describe('when props are received', () => {

        it('renders properly', () => {
            expect(hall).toMatchSnapshot();
        });

        it('displays the halls name from props', () => {
            expect(hall.find('.hall-header').text()).toEqual(propsOne.cinema.hall.hallName);
        });

        it('displays correct number of hall information block', () => {
            expect(hall.find('.hall-info').exists()).toBe(true);
        });

        it('displays correct number of hall information unit blocks', () => {
            expect(hall.find('.hall-info-unit').length).toEqual(2);
        });

        it('displays correct information about movie name', () => {
            expect(hall.find('.hall-info-unit').at(1).text()).toEqual(propsOne.cinema.hall.movie);
        });

        it('renders correct amount of Row components', () => {
            expect(hall.find('Row').length).toEqual((propsOne.cinema.hall.rows).length);
        });

        it('renders connected OrderInfo component', () => {
            expect(hall.find('Connect(OrderInfo)').exists()).toBe(true);
        });
    });
});
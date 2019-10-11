import React from 'react';
import { shallow } from '../../enzyme';
import { Hall } from './index';

describe('Hall', () => {
    const setHall = jest.fn();
    const propsArrived = {
        cinema: {
            hall: {
                hallName: 'Test Hall',
                rows: [
                    {
                        _id: "RT01",
                        rowNumber: 1,
                        skip: false,
                        places: []
                    },
                    {
                        _id: "RT02",
                        rowNumber: 2,
                        skip: true,
                        places: []
                    },
                ]
            },
            loading: false
        },
        setHall
    };
    const propsPending = { cinema: { hall: { hallName: '', rows: [] }, loading: true }, setHall };
    const hall = shallow(<Hall {...propsArrived} />);
    const hallLoading = shallow(<Hall {...propsPending} />);

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
            expect(hall.find('.hall-header').text()).toEqual(propsArrived.cinema.hall.hallName);
        });

        it('renders correct amount of Row components', () => {
            expect(hall.find('Row').length).toEqual((propsArrived.cinema.hall.rows).length);
        });
    });
});
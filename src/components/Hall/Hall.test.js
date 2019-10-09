import React from 'react';
import { shallow } from '../../enzyme';
import { Hall } from './index';

describe('Hall', () => {
    const setHall = jest.fn();
    const props = { cinema: { hall: { hallName: 'Test Hall', rows: [] }, loading: false }, setHall };
    const hall = shallow(<Hall {...props} />);

    it('renders properly', () => {
        expect(hall).toMatchSnapshot();
    });

    // #TODO

    // renders a hall name by class
    it('displays the halls name from props', () => {
        expect(hall.find('h1').text()).toEqual(props.cinema.hall.hallName)
    });

    // renders correct number of rows
});
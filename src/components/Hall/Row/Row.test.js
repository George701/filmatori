import React from 'react';
import { shallow } from '../../../enzyme';
import Row from './index';

describe('Row', () => {
    const props = {
        row: {
            _id: 'RT01',
            rowNumber: 1,
            skip: true,
            places: [
                {
                    "_id": "PT09",
                },
                {
                    "_id": "PT10",
                },
            ]
        }
    };
    const row = shallow(<Row {...props} />);

    it('renders properly', () => {
        expect(row).toMatchSnapshot();
    });

    it('displays empty space for next row ', () => {
        expect(row.find('.row-main').at(1).exists()).toBe(true);
    });

    it('displays correct number of row number identifiers', () => {
        expect(row.find('.row-number').length).toEqual(2);
    });

    it('displays correct number of rows identifier', () => {
        expect(parseInt(row.find('.row-number').at(0).text(), 10)).toEqual(props.row.rowNumber);
        expect(parseInt(row.find('.row-number').at(1).text(), 10)).toEqual(props.row.rowNumber);
    });

    it('displays correct number of generated places', () => {
        expect(row.find('Connect(Place)').length).toEqual((props.row.places).length)
    });
});
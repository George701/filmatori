import React from 'react';
import { shallow } from '../../../enzyme';
import Row from './index';
import { rowProps } from '../../../testData/values'

describe('Row', () => {

    const row = shallow(<Row {...rowProps} />);

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
        expect(parseInt(row.find('.row-number').at(0).text(), 10)).toEqual(rowProps.row.rowNumber);
        expect(parseInt(row.find('.row-number').at(1).text(), 10)).toEqual(rowProps.row.rowNumber);
    });

    it('displays correct number of generated places', () => {
        expect(row.find('Connect(Place)').length).toEqual((rowProps.row.places).length)
    });
});